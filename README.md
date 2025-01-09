# Langkah Deploy di Amazon Linux 2023
## Install Dependency
```
bash setup.sh
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
AWS_ACCESS_KEY_ID=AccessKeyIdAnda
AWS_SECRET_ACCESS_KEY=SecretAccessKeyAnda
AWS_SESSION_TOKEN=SessionTokenAnda
AWS_REGION=RegionBucketAnda
AWS_BUCKET_NAME=NamaBucketAnda
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
