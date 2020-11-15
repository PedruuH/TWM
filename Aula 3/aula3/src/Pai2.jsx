import React, { cloneElement } from 'react'
//import FamiliaMembro from './FamiliaMembro'
export default props => {
    console.log(props)
    return(
        // <div>
        //     {props.children}}
        // </div>
        React.Children.map(props.children, elemento =>{
            return cloneElement(elemento, props)        
        })
    )
}


// {React.Children.map(props.children, elemento =>{
//     return cloneElement(elemento, props)
// })}
//            {/* {React.cloneElement(props.children, {...props})} */}

