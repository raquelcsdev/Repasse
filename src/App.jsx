import { useState } from 'react'
import Relogio from './components/Relogio'
import CardChamado from './components/CardChamado'
import CardAnuncio from './components/CardAnuncio'
import './App.css'

const chamadosIniciais = [
  { id: 'INC-0031', titulo: 'Link WAN fora — filial SP', prioridade: 'Crítica' },
  { id: 'INC-0028', titulo: 'Lentidão nos servidores', prioridade: 'Crítica' },
  { id: 'INC-0035', titulo: 'Alerta SNMP — switch core', prioridade: 'Alta' },
]

const anunciosIniciais = [
  { id: 1, empresa: 'PRODEST', texto: 'Manutenção até as 19h.', tipo: 'manutencao', autor: 'Raquel', data: '14 abr' },
  { id: 2, empresa: 'PMC', texto: 'Evento no Domingo às 08h até as 23h.', tipo: 'informacao', autor: 'Raquel', data: '14 abr' },
  { id: 3, empresa: 'CLICKBUS', texto: 'Comunicar alertas de API imediatamente.', tipo: 'importante', autor: 'Raquel', data: '14 abr' },
  { id: 4, empresa: 'FAMILHÃO', texto: 'Novo contrato monitorado. Acesso no Zabbix.', tipo: 'novidade', autor: 'Raquel', data: '14 abr' },
]

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)
  const [anuncios, setAnuncios] = useState(anunciosIniciais)

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>NOC — Repasse de turno</h1>
          <p>Turno 12x36</p>
        </div>
        <Relogio />
      </header>

      <div className="paineis">
        <main className="painel-chamados">
          <p className="secao-titulo">Chamados pendentes</p>
          {chamados.map((chamado) => (
            <CardChamado key={chamado.id} chamado={chamado} />
          ))}
        </main>

        <aside className="painel-anuncios">
          <p className="secao-titulo">Quadro de anúncios</p>
          <div className="anuncios-grid">
            {anuncios.map((anuncio) => (
              <CardAnuncio key={anuncio.id} anuncio={anuncio} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App