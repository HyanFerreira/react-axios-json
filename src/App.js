import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const baseURL = 'http://localhost:9000/pessoa';

// let pessoas = [
//   { COD: '01', NOME: 'Hyan Ferreira' },
//   { COD: '02', NOME: 'Maria Eduarda' },
//   { COD: '03', NOME: 'Helyana Ferreira' },
// ];

function MyTable() {
  const [pessoas, setPessoas] = useState([]); // Usar um array para armazenar múltiplas pessoas

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPessoas(response.data); // Recebe um array de pessoas
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);
  return (
    <table className="table-pessoas">
      <tr className="table-line">
        {/* <td className="table-column">Id</td> */}
        <td className="table-column">Nome</td>
        <td className="table-column">Email</td>
      </tr>
      {pessoas.map((pessoa) => (
        <tr className="table-line">
          {/* <td className="table-column">{pessoa.id}</td> */}
          <td className="table-column">{pessoa.nome}</td>
          <td className="table-column">{pessoa.email}</td>
        </tr>
      ))}
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">{MyTable()}</header>
    </div>
  );
}

export default App;
