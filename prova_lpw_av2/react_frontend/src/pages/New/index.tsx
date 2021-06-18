import React, { useEffect, useState } from 'react'
import { Form } from './styles'
import api from '../../services/api'
import { useRouteMatch } from 'react-router'

interface SelecoesParametros {
  id: string
}

interface Cadastro {
  ano: string;
  sede: string;
  campeao: string;
}


const New: React.FC = () => {
  const { params } = useRouteMatch<SelecoesParametros>()

  const [selecoes, setSelecoes] = useState<Cadastro[]>([])
  const [id, setID] = useState('')
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')


  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/worldcup/${params.id}`).then(response => response.data)
      console.log(dados)
      if (dados) {
        setID(dados.id)
        setAno(dados.ano)
        setSede(dados.sede)
        setCampeao(dados.campeao)
      } else {
        setSelecoes([])
      }
    }
    loadData()
  }, [])

  async function handleAddSelecoes(event: any) {
    event.preventDefault()

    const { target: form } = event

    const novoCadastro = {
      ano: form.ano.value,
      sede: form.sede.value,
      campeao: form.campeao.value,
    }

    if (id) {
      await api.put(`/worldcup/${id}`, novoCadastro)
      alert('Dados Alterados com sucesso !!')
    } else {
      await api.post('/worldcup', novoCadastro)
      alert('Dados incluidos com sucesso !!')
    }

    setSelecoes([...selecoes, novoCadastro]) // IMUTABILIDADE
    setAno('')
    setSede('')
    setCampeao('')

  }

  return (
    <Form onSubmit={handleAddSelecoes}>
       <input type='text' name='ano' value={ano}
        onChange={e => setAno(e.target.value)} placeholder='Ano' />
      <input type='text' name='sede' value={sede}
        onChange={e => setSede(e.target.value)} placeholder='Sede' />
      <input type='text' name='campeao' value={campeao}
        onChange={e => setCampeao(e.target.value)} placeholder='Campeao' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default New
