require('dotenv').config();
const Sequelize = require('sequelize');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Mengambil konfigurasi koneksi database dari file .env
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_DIALECT } = process.env;

// Konfigurasi koneksi ke database
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
});

// Fungsi untuk menguji koneksi ke database
async function testDatabaseConnection() {
    try {
        // Coba terhubung ke database
        await sequelize.authenticate();
        console.log('Koneksi ke database berhasil.');

    } catch (error) {
        console.error('Koneksi ke database gagal:', error);
    }
}

// Jalankan fungsi untuk menguji koneksi ke database
testDatabaseConnection();

module.exports = app;
