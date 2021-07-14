/* eslint-disable jsx-a11y/label-has-associated-control */
import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Container, Tabela } from "./styles";

interface ICampeao {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

interface clienteParametro {
  campeao: string;
}

interface IDatas {
  campeao: string;
}

const Home: React.FC = () => {
  const { params } = useRouteMatch<clienteParametro>();
  const [anosCampeoes, setAnosCampeoes] = useState<ICampeao[]>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3333/worldcup`,
    })
      .then((response: AxiosResponse<ICampeao[]>) => {
        const novas_datas: ICampeao[] = response.data.filter(campeao => {
          return campeao.campeao === params.campeao;
        });

        setAnosCampeoes(novas_datas);

      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>Detalhes do campeao</h1>
      <Tabela>
        {anosCampeoes.map(item => {
          return (
            <p> O(A) {item.campeao} ganhou no ano de {item.ano} no(a) {item.sede} </p>
          )
        })}
      <Link to="/" >Voltar</Link>
      </Tabela>
    </Container>
  );
};

export default Home;
