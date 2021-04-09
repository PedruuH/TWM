import React, { useState } from "react";
import Display from './Display'
import Button from "./Button"


const Contador = () => {
    const [total, setTotal] = useState(0);
    const incrementTotal = () => setTotal(currentTotal => currentTotal + 1);
    const decrementTotal = () => setTotal(currentTotal => currentTotal - 1);

    return (
        <div className="App">
            <div>
                <Display value= {total}/>
            </div>
            <div className="Button">
                <Button click={incrementTotal} label='+'/>       
                <Button click={decrementTotal} label='-'/>         
                
               
            </div>
        </div>
    );
};
export default Contador;