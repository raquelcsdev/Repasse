import { useState } from 'react'

const chamadosIniciais = [
  { id: 'INC-0031', titulo: 'Link WAN fora — filial SP', prioridade: 'Crítica' },
  { id: 'INC-0028', titulo: 'Lentidão nos servidores', prioridade: 'Crítica' },
  { id: 'INC-0035', titulo: 'Alerta SNMP — switch core', prioridade: 'Alta' },
]

function CardChamado({ chamado }) {
  return (
    <div>
      <p>{chamado.id}</p>
      <p>{chamado.titulo}</p>
      <p>{chamado.prioridade}</p>
    </div>
  )
}

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)

  return (
    <div>
      <h1>NOC — Repasse de turno</h1>
      <p>Total de chamados: {chamados.length}</p>

      {chamados.map((chamado) => (
        <CardChamado key={chamado.id} chamado={chamado} />
      ))}
    </div>
  )
}

export default App