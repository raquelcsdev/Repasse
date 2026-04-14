function CardChamado({ chamado }) {
  return (
    <div>
      <p>{chamado.id}</p>
      <p>{chamado.titulo}</p>
      <p>{chamado.prioridade}</p>
    </div>
  )
}

export default CardChamado