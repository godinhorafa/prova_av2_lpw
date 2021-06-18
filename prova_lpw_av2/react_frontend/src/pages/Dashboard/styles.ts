import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 900px;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  ul li {
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-top: 30px;
    list-style: none;
  }

ul li a {
    text-decoration: none;
  }

  button {
    border: 0;
    background: #7159c1;
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
  }
`

export const Tabela = styled.table`
    margin-top: 2rem;
    tr td {
      border: 1px solid #ddd;
    }
    th {
      background: #7159c1;
    }

`;
