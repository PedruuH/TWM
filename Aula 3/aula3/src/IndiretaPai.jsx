import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    // filho vai retornar as informacoes para o pai

    // let nome = '?'
    // let idade = 0
    
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)

    function fornecerInformacoes(nomeParam, idadeParam) {
        // nome = nomeParam
        // idade = idadeParam
        setNome(nomeParam)
        setIdade(idadeParam)
        console.log('------------------------')
        console.log('Dentro da funcao do pai')
        console.log(nome)
        console.log(idade)
        console.log('------------------------')

        //setNome(nomeParam)
        //setIdade(idadeParam)
        //console.log(nome, idade)
    }


    return(
        <div>
            <div>Pai</div>
            <div>
                <span>{nome} </span>
                <span>      {idade}</span>
            </div>            
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}