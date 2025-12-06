const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./database.db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Veritabanı Tablosunu Oluştur
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, place TEXT, name TEXT, comment TEXT, date TEXT)");
});

// Yorum Kaydetme (API)
app.post('/yorum-yap', (req, res) => {
    const { place_name, user_name, user_comment } = req.body;
    const date = new Date().toLocaleString('tr-TR');

    const stmt = db.prepare("INSERT INTO comments (place, name, comment, date) VALUES (?, ?, ?, ?)");
    stmt.run(place_name, user_name, user_comment, date, function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send("Hata oluştu.");
        } else {
            // Başarılı olunca kullanıcıyı geri yönlendir
            res.redirect('/?status=success');
        }
    });
    stmt.finalize();
});

// GİZLİ ADMİN PANELİ (Sadece sen bilmelisin)
// Tarayıcıdan http://localhost:3000/yonetici-paneli adresine giderek yorumları görebilirsin.
app.get('/yonetici-paneli', (req, res) => {
    db.all("SELECT * FROM comments ORDER BY id DESC", [], (err, rows) => {
        if (err) {
            throw err;
        }
        let html = "<h1>Gelen Yorumlar (Sadece Yönetici)</h1><table border='1'><tr><th>Mekan</th><th>İsim</th><th>Yorum</th><th>Tarih</th></tr>";
        rows.forEach((row) => {
            html += `<tr><td>${row.place}</td><td>${row.name}</td><td>${row.comment}</td><td>${row.date}</td></tr>`;
        });
        html += "</table>";
        res.send(html);
    });
});

// Sunucuyu Başlat
app.listen(3000, () => {
    console.log('Sunucu çalışıyor: http://localhost:3000');
});