const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // SQLite yerine PG kullanıyoruz
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --- VERİTABANI BAĞLANTISI ---
// Render, bağlantı linkini 'DATABASE_URL' içine koyar.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Render için gerekli SSL ayarı
    }
});

// --- TABLOYU OLUŞTUR (Eğer yoksa) ---
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
    const date = new Date().toLocaleString('tr-TR');

    try {
        // Postgres'te '?' yerine '$1, $2' kullanılır
        const query = "INSERT INTO comments (place, name, comment, date) VALUES ($1, $2, $3, $4)";
        await pool.query(query, [place_name, user_name, user_comment, date]);
        res.redirect('/?status=success');
    } catch (err) {
        console.error(err);
        res.status(500).send("Veritabanı hatası oluştu.");
    }
});

// --- 2. Yorumları GETİR (GET) ---
app.get('/api/comments', async (req, res) => {
    const placeFilter = req.query.place; 
    
    try {
        let query = "SELECT * FROM comments ORDER BY id DESC";
        let params = [];

        if (placeFilter) {
            query = "SELECT * FROM comments WHERE place = $1 ORDER BY id DESC";
            params = [placeFilter];
        }

        const result = await pool.query(query, params);
        res.json(result.rows); // Postgres sonuçları 'rows' içinde verir
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Veri çekilemedi" });
    }
});

// --- 3. Yorum SİL (DELETE) ---
app.delete('/api/comments/:id', async (req, res) => {
    const id = req.params.id;
    
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
    const directoryPath = path.join(__dirname, 'public', 'images', placeId.toString());

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

// Sunucuyu Başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: Port ${PORT}`);
});