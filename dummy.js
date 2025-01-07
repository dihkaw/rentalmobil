const mysql = require('mysql2');

// Konfigurasi koneksi database
require('dotenv').config(); // Memuat konfigurasi dari .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Data dummy
const dummyData = [
    { name: 'Avanza', price: 500000, image: '/uploads/avanza.jpg' },
    { name: 'Xenia', price: 400000, image: '/uploads/xenia.jpg' },
    { name: 'Ertiga', price: 650000, image: '/uploads/ertiga.jpg' },
];

// Query untuk membuat tabel jika belum ada
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        image VARCHAR(255) NOT NULL
    )
`;

// Fungsi untuk membuat tabel jika belum ada
function createTable(callback) {
    db.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Gagal membuat tabel:', err.message);
            process.exit(1);
        } else {
            console.log('Tabel "cars" berhasil diperiksa atau dibuat.');
            callback();
        }
    });
}

// Fungsi untuk menambahkan data dummy
function insertDummyData() {
    const query = 'INSERT INTO cars (name, price, image) VALUES (?, ?, ?)';

    dummyData.forEach((car) => {
        db.query(query, [car.name, car.price, car.image], (err, results) => {
            if (err) {
                console.error(`Gagal menambahkan ${car.name}:`, err.message);
            } else {
                console.log(`Berhasil menambahkan ${car.name} dengan ID ${results.insertId}`);
            }
        });
    });

    db.end(() => {
        console.log('Koneksi database ditutup.');
    });
}

// Jalankan proses: buat tabel jika belum ada, lalu tambahkan data dummy
createTable(insertDummyData);
