import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Container, Tabela } from './styles'
import Table from 'react-bootstrap/Table'

interface IListagem {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

const Dashboard: React.FC = () => {

  const [selecoes, setSelecoes] = useState<IListagem[]>([])

  useEffect(() => {
    api.get('/worldcup').then(response => setSelecoes(response.data))
  })
  console.log(selecoes)

  async function handleDelete(id: string) {
    await api.delete(`/worldcup/${id}`)
    setSelecoes(selecoes.filter(sel => sel.id !== id))
  }

  return (
  <Container>
    <Tabela>
      <thead>
        <tr>
          <td width="100px">Ano</td>
          <td width="100px">Sede</td>
          <td width="100px">Campeao</td>
        </tr>
      </thead>
      <tbody>
          {selecoes.map(index => {
              return (
                <tr key={index.id}>
                  <td width="100px"> {index.ano} </td>
                  <td width="100px"> {index.sede} </td>
                  <td width="100px"> <Link to={`/worldcup/${index.campeao}`}>{index.campeao}</Link> </td>
                  <td>
                    <button type="button" onClick={() => handleDelete(index.id)}>Excluir</button>
                    <Link to={`/new/${index.id}`}><button type="button">Alterar</button></Link>
                  </td>
                </tr>
              )
        })}
      </tbody>
    </Tabela>
  </Container>
  )
}

export default Dashboard

