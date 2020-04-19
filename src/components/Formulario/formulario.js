import React, {useState} from 'react'

import {ContentorFormulario, ConteudoFormulario} from './formulario_estilo'
import idGerado from '../../ferramentas/idGerado'

export default function Formulario({adicionarProduto}) {
    const [produto, setProduto] = useState('')
    const [tipo, setTipo] = useState('')
    const [preco, setPreco] = useState('')

    function manipularEnviar() {
        const dado = {id: idGerado(), produto, tipo, preco}

        adicionarProduto(dado)

        setProduto('')
        setTipo('')
        setPreco('')

    }

    return (
        <ContentorFormulario>
           <ConteudoFormulario>
             <h1>Adicionar Novo Produto</h1>
             <input placeholder="Nome do produto" id="produto" type="text" name="produto" value={produto} 
                  onChange={e => setProduto(e.target.value)}/>
             <input placeholder="Tipo do produto" id="tipo" type="text" name="tipo" value={tipo} 
                  onChange={e => setTipo(e.target.value)}/>
             <input placeholder="Preço do produto" id="preco" type="text" name="preco" value={preco} 
                  onChange={e => setPreco(e.target.value)}/>
             <button className="button" onClick={manipularEnviar} type="button">Salvar</button>
           </ConteudoFormulario>
       </ContentorFormulario>
    )
}