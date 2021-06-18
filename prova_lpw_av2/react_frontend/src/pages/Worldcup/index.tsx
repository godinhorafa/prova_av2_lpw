import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import api from '../../services/api'
import { Container, Descricao } from './styles'

interface SelecoesParametros {
  campeao: string
}

interface Cadastro {
  ano: string;
  sede: string;
  campeao: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<SelecoesParametros>()

  const [selecoes, setSelecoes] = useState<Cadastro[]>([])

  useEffect(() => {
    api.get('/worldcup').then(response => setSelecoes(response.data))
  }, [])

  let detalhesSelecao = []
  detalhesSelecao = selecoes.filter(sel => sel.campeao === params.campeao)
  console.log(detalhesSelecao)

  return (
    <Container>
      <Descricao>
        <ul>
          {detalhesSelecao.map((sel, index) =>
            <li key={index}>
              <span>Ano: {sel.ano} </span>
              <span>Sede: {sel.sede}</span>
            </li>
          )}
        </ul>
      </Descricao>
    </Container>
  )
}

export default Details

