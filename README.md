# Langkah Deploy 
## Install Dependency
```
npm init -y
```
```
npm install express mysql mysql2 dotenv multer ejs body-parser
```
```
npm install pm2 -g
```
## Config Environment
1. Buat file .env pada folder aplikasi
2. Tambahkan kebutuhan untuk mengkoneksikan database seperti hostname, user, password, dan nama database seperti berikut :
```java
DB_HOST=AlamatDatabaseAnda
DB_USER=USerDatabaseAnda
DB_PASSWORD=passwordDatabaseAnda
DB_NAME=NamaDatabaseAnda
PORT=3000
```
## Menambahkan data dummy ke database
```
node dummy.js
```
## Menjalankan aplikasi 
```
pm2 start app.js
```
## Test Program
Buka browser dan masukan IP Address Anda dan portnya seperti berikut: http://localhost:3000
