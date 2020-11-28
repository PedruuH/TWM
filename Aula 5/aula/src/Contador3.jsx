import React, {useState} from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassosForm from './PassosForm'


export default propos => {
    
    const [numero, setNumero] = useState(propos.numeroInicial)
    const [passo, setPasso] = useState(propos.passoInicial)    


    const inc = () => {
        setNumero(numero + passo)
    }

    const dec = () => {
        setNumero(numero - passo)
    }


    const atualizaPasso = (novoPasso) => {
        setPasso(novoPasso)
    }
 

    return(
        <div className="Contador">
            <h2>Contador</h2>
            <Display numero={numero} />
            <PassosForm passo={passo} setPasso={atualizaPasso}/>
            <Botoes setInc={inc} 
                setDec={dec}/>
            {/* <button onClick={e => this.inc()}>+</button> */}             
        </div>
    )
}
