const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

app.get('/api/chamados', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM chamados ORDER BY criado_em DESC')
    res.json(resultado.rows)
  } catch (erro) {
    console.error(erro)
    res.status(500).json({ erro: 'Erro ao buscar chamados' })
  }
})

app.listen(3001, () => {
  console.log('API rodando em http://localhost:3001')
})