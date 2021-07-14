import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  align-items: center;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 50%;
  position: relative;

  ul li {
    background: #cfd9dc;
    border-bottom: 1px solid #cfd9dc;
    margin-top: 30px;
    list-style: none;
  }

  ul li a {
    text-decoration: none;
  }

  h1 {
    color: #7393b3;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
`;

export const Tabela = styled.form`
display: grid;
background-color: #7393b3;
color: #FFFFFF;
font-family: Arial, Helvetica, sans-serif;
color: #eee;
margin-top: 8px;
border-radius: 20px;
box-sizing: border-box;
flex-direction: column;
position: absolute;
float: left;
top: 50px;
left: 50px;
height: 200px;
padding: 20px;
width: 320px;
margin-top: 50px;
margin-bottom: 150px;
`;


