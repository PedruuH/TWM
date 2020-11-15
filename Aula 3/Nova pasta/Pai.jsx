import React from 'react'
import Filho from './Filho'

export default props => {

    return(
        <div>
            Pai   
            <Filho nome='Joao' sobrenome={props.sobrenome} cidade={props.cidade}/>   
            <Filho nome='Marcelo' {...props} />
        </div>
    )
}