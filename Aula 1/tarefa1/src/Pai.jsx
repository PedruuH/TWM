import React from 'react'
import Filho from './Filho'

export default props =>{
    return (
        <div>
            Pai
            <Filho nome='João' sobrenome={props.sobrenome}/>
            <Filho nome='Marcelo' {...props}/>
        </div>
    )
}
