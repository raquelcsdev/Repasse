const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const chamados = [
  { id: 'INC-0031', titulo: 'Link WAN fora — filial SP', prioridade: 'Crítica' },
  { id: 'INC-0028', titulo: 'Lentidão nos servidores', prioridade: 'Crítica' },
  { id: 'INC-0035', titulo: 'Alerta SNMP — switch core', prioridade: 'Alta' },
]

app.get('/api/chamados', (req, res) => {
  res.json(chamados)
})

app.listen(3001, () => {
  console.log('API rodando em http://localhost:3001')
})