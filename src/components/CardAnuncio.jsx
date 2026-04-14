function CardAnuncio({ anuncio }) {
  const cores = {
    manutencao: { fundo: '#1e3a5f', badge: '#2563eb', texto: 'Manutenção' },
    informacao: { fundo: '#1a3a2a', badge: '#16a34a', texto: 'Informação' },
    importante: { fundo: '#3a1a1a', badge: '#dc2626', texto: 'Importante' },
    novidade:   { fundo: '#3a2e1a', badge: '#d97706', texto: 'Novidade' },
  }

  const cor = cores[anuncio.tipo] || cores.informacao

  return (
    <div className="card-anuncio" style={{ backgroundColor: cor.fundo }}>
      <span className="badge-anuncio" style={{ backgroundColor: cor.badge }}>
        {cor.texto}
      </span>
      <p className="anuncio-empresa">{anuncio.empresa}</p>
      <p className="anuncio-texto">{anuncio.texto}</p>
      <p className="anuncio-autor">{anuncio.autor} · {anuncio.data}</p>
    </div>
  )
}

export default CardAnuncio