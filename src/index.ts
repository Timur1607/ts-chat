import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'ваш_логин',
  password: 'ваш_пароль',
  database: 'ваша_бд',
  waitForConnections: true,
  connectionLimit: 10
});

// Тестовый запрос к БД
app.get('/api/users', async (res:any) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT 5');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});