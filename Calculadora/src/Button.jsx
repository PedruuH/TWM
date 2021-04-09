import React from 'react'
export default props =>{   
    return(
        <button onClick={e => props.click && props.click(props.label)}>{props.label}</button>
    )
}        