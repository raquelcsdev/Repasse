import { useState, useEffect } from 'react'

function Relogio() {
  const [hora, setHora] = useState('')

  useEffect(() => {
    function atualizar() {
      const agora = new Date()
      setHora(agora.toLocaleTimeString('pt-BR'))
    }
    atualizar()
    const intervalo = setInterval(atualizar, 1000)
    return () => clearInterval(intervalo)
  }, [])

  return <p>Horário atual: {hora}</p>
}

export default Relogio