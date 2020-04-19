import React from 'react'

import formatoPreco from '../../ferramentas/formatoPreco.js'
import {ContentorTabela, ConteudoTabela} from './tabela_estilo'

const CabecalhoTabela = () => {
    return (
       <thead>
          <tr>
             <th>Produtos</th>
             <th>Tipo</th>
             <th>Preço</th>
             <th>Remover</th>
          </tr>
       </thead>
    )
}

const TabelaResto = ({produtos, removerProduto}) => {
    return (
       <tbody>
         {produtos.map(atual => (
            <tr key={atual.id}>
                <td>{atual.produto}</td>
                <td>{atual.tipo}</td>
                <td>{formatoPreco(atual.preco)}</td>
                <td>
                   <button onClick={() => removerProduto(atual.id)}>&#215;</button>
                </td>
            </tr>
         ))}
       </tbody>
    )
}

export default function Tabela({produtos, removerProduto}) {
    return (
       <ContentorTabela>
          <ConteudoTabela>
              <CabecalhoTabela />
              <TabelaResto produtos={produtos} removerProduto={removerProduto} />
          </ConteudoTabela>
       </ContentorTabela>
    )
}
