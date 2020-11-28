import React from 'react'

export default propos => {
    return(
        <div>
            <button onClick={propos.setInc}>+</button>
            <button onClick={propos.setDec}>-</button>           
        </div>
    )
}