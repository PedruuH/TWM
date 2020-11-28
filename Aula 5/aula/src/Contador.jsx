import React from 'react'
import './Contador.css'

export default class Contador extends React.Component {

    constructor(props) {
        super(props)        
        //this.inc = this.inc.bind(this)
    }


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    };
    
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + this.state.passo
    //     })
    // }
    
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }


    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor Atual: {this.state.numero}</p>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" typeof="number"
                        value={this.state.passo}
                        onChange={this.setPasso}/>                         
                        {/* onChange={this.setPasso}/> */}
                </div>
                {/* <button onClick={e => this.inc()}>+</button> */}
            </div>
        )
    }
}





// constructor(props) {
//     super(props)    

//     this.state = {
//         numero: props.numeroInicial
//     }
// }
