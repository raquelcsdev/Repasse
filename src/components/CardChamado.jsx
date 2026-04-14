import './CardChamado.css'

function CardChamado({ chamado }) {
  const prioridadeClasse = chamado.prioridade.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return (
    <div className="card-chamado">
      <div>
        <p className="id">{chamado.id}</p>
        <p className="titulo">{chamado.titulo}</p>
      </div>
      <span className={`prioridade ${prioridadeClasse}`}>
        {chamado.prioridade}
      </span>
    </div>
  )
}

export default CardChamado