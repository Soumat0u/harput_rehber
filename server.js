const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); 
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // İsteğe bağlı, frontend-backend farklı domaindeyse gerekir

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// --- VERİTABANI BAĞLANTISI ---
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// --- TABLOYU OLUŞTUR ---
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        place TEXT NOT NULL,
        name TEXT NOT NULL,
        comment TEXT NOT NULL,
        date TEXT NOT NULL
    );
`;

pool.query(createTableQuery)
    .then(() => console.log("Tablo kontrol edildi / oluşturuldu."))
    .catch(err => console.error("Tablo oluşturma hatası:", err));


// --- 1. Yorum Kaydetme (POST) ---
app.post('/yorum-yap', async (req, res) => {
    const { place_name, user_name, user_comment } = req.body;
    // Tarih formatını sabitleyelim
    const date = new Date().toLocaleString('tr-TR');

    try {
        const query = "INSERT INTO comments (place, name, comment, date) VALUES ($1, $2, $3, $4)";
        await pool.query(query, [place_name, user_name, user_comment, date]);
        res.redirect('/?status=success');
    } catch (err) {
        console.error(err);
        res.status(500).send("Veritabanı hatası oluştu.");
    }
});

// --- 2. Yorumları GETİR (Frontend ile Uyumlu Hale Getirildi) ---
// Frontend '/api/all-comments' istiyordu, burayı düzelttik.
app.get('/api/all-comments', async (req, res) => {
    
    try {
        // Frontend 'user_name', 'place_name' bekliyor. 
        // SQL sorgusunda isimleri (alias) değiştirerek uyumlu hale getiriyoruz.
        const query = `
            SELECT 
                id, 
                place as place_name, 
                name as user_name, 
                comment as user_comment, 
                comment as comment, 
                date as created_at 
            FROM comments 
            ORDER BY id DESC
        `;

        const result = await pool.query(query);
        res.json(result.rows); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Veri çekilemedi" });
    }
});

// --- 3. Yorum SİL (Frontend ile Uyumlu Hale Getirildi) ---
// Frontend '/api/delete-comment' adresine POST atıyordu.
app.post('/api/delete-comment', async (req, res) => {
    const { id } = req.body; // Frontend ID'yi body içinde gönderiyor
    
    try {
        const query = "DELETE FROM comments WHERE id = $1";
        await pool.query(query, [id]);
        res.json({ message: "Silindi" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Silinemedi" });
    }
});

// --- 4. MEKAN RESİMLERİNİ GETİR ---
app.get('/api/images/:id', (req, res) => {
    const placeId = req.params.id;
    // Render dosya sisteminde 'public/images' klasörünün varlığından emin olun
    const directoryPath = path.join(__dirname, 'public', 'images', placeId.toString());

    if (!fs.existsSync(directoryPath)) {
        return res.json([]); // Klasör yoksa boş dizi dön
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.json([]);
        }
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        const imagePaths = imageFiles.map(file => `images/${placeId}/${file}`);
        res.json(imagePaths);
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: Port ${PORT}`);
});