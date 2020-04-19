import React, { useState } from "react"

import Cabecalho from './components/Cabecalho/cabecalho'
import Tabela from './components/Tabela/tabela'
import Formulario from './components/Formulario/formulario'


function App() {
      const [produtos, setProdutos] = useState([
          {id: 1, produto: 'PC', tipo: 'Eletrônico', preco: 2500},
          {id: 2, produto: 'English Course', tipo: 'Livro', preco: 150},
          {id: 3, produto: 'Camisa', tipo: 'Vestuário', preco: 50},
          {id: 4, produto: 'TV', tipo: 'Eletrônico', preco: 2000}
      ])

      function removerProduto(id) {
         setProdutos(produtos.filter(atual => atual.id !== id))
      }

      function adicionarProduto(atual) {
         setProdutos([...produtos, atual])
      }

      return (
          <>
          <Cabecalho />
          <Tabela produtos={produtos} removerProduto={removerProduto}/>
          <Formulario adicionarProduto={adicionarProduto}/>
          </>
      )
}

export default App
