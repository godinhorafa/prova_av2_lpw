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
`;

export const Form = styled.form`
  display: flex;
  background-color: #7393b3;
  border-radius: 20px;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  float: left;
  top: 50px;
  left: 50px;
  height: 300px;
  padding: 20px;
  width: 320px;
  margin-bottom: 150px;

  label {
    font-family: Arial, Helvetica, sans-serif;
    color: #eee;
    margin-top: 8px;
  }

  input {
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    font-size: 18px;
    outline: 0;
    padding: 4px 20px 0;
  }

  button {
    box-shadow: 3px 4px 0px 0px #899599;
    background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
    background-color: #ededed;
    border-radius: 15px;
    border: 1px solid #d6bcd6;
    display: inline-block;
    cursor: pointer;
    color: #3a8a9e;
    font-family: Arial;
    font-size: 17px;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #e1e2ed;
    margin-top: 8px;
  }
  button:hover {
    background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color: #bab1ba;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`;

export const Tabela = styled.table`
  display: box;
  margin-top: 2rem;
  background-color: #ffffff;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 10px;
  border-collapse: separate;
  border-spacing: 5px;
  position: absolute;
  float: left;
  top: 300px;
  left: -100px;
}


  tr td {
    border: 1px solid #ddd;
    padding: 5px 15px 5px 15px;
    text-align: center;
    border-collapse: collapse;
    box-shadow: 0 30px 40px rgba(0, 0, 0, 0.1);
    color: #241571;
    line-height: 1.2;
  }

  td:hover {
    background-color: #bcacd4;
  }

  button {
    box-shadow: 3px 4px 0px 0px #899599;
    width: 120px;
    background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
    background-color: #ededed;
    border-radius: 15px;
    border: 1px solid #d6bcd6;
    display: inline-block;
    cursor: pointer;
    color: #3a8a9e;
    font-family: Arial;
    font-size: 17px;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #e1e2ed;
    margin-top: 8px;
    margin-left: 8px;
  }
`;