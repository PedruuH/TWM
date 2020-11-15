import React from 'react'


const gerarIdade = () => parseInt(Math.random() * (70 - 20))
export default props => {    
    return(
        <div>
            Filho
            <div>
                <button onClick = {
                    function(e) {
                       props.quandoClicar('Joao', gerarIdade()) 
                    }
                }>
                Fornecer informações
                </button>
            </div>            
        </div>
    )
}