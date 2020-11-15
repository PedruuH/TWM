import React from 'react'

export default props => {

    return(
        <div>
            {props.nome} <strong>{props.sobrenome}</strong> {props.cidade} {props.apelido}
        </div>
    )
}