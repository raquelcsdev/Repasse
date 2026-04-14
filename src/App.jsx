import { useState } from 'react'
import Relogio from './components/Relogio'
import CardChamado from './components/CardChamado'
import './App.css'

const chamadosIniciais = [
  { id: 'INC-0031', titulo: 'Link WAN fora — filial SP', prioridade: 'Crítica' },
  { id: 'INC-0028', titulo: 'Lentidão nos servidores', prioridade: 'Crítica' },
  { id: 'INC-0035', titulo: 'Alerta SNMP — switch core', prioridade: 'Alta' },
]

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>NOC — Repasse de turno</h1>
          <p>Turno 12x36</p>
        </div>
        <Relogio />
      </header>

      <main>
        <p className="secao-titulo">Chamados pendentes</p>
        {chamados.map((chamado) => (
          <CardChamado key={chamado.id} chamado={chamado} />
        ))}
      </main>
    </div>
  )
}

export default App