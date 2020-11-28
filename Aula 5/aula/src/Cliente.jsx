import './Cliente.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput'

class Cliente extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            celular: ''            
        };
    }

    setNome = (nomePar) => {
        this.setState({
            nome: nomePar
        })
    }

    setEmail = (emailPar) => {
        this.setState({
            email: emailPar
        })
    }

    setCelular = (celularPar) => {
        this.setState({
            celular: celularPar
        })
    }

    showValues = () => {
        console.log(this.state.nome)
        console.log(this.state.email)
        console.log(this.state.celular)
        this.setNome("")
        this.setCelular("")
        this.setEmail("")       
    }

    render() {
      return (
        <Container style={{ marginTop: '50px' }}>
        <h1>Cadastro de Clientes</h1>
        <Form style={{ margin: '15px' }} onReset={this.resetForm}>
          <Form.Row>
            <Col>
                <Form.Control 
                    className="txtNome" 
                    value={this.state.nome}
                    onChange={e=>this.setNome(e.target.value)}
                    placeholder="Digite o seu nome" />
                <Form.Label>Nome</Form.Label>
            </Col>
            <Col>
                <Form.Control className="txtEmail" 
                onChange={e=>this.setEmail(e.target.value)}
                value={this.state.email}
                type="email" 
                placeholder="Digite o seu e-mail" />
                <Form.Label>E-mail</Form.Label>
            </Col>
            <Col>
                <MaskedFormControl type='text' 
                name='txtCelular'
                value={this.state.celular}
                onChange={e=>this.setCelular(e.target.value)}                
                placeholder="Telefone Celular"
                mask='(11)11111-1111' />            
                <Form.Label>Celular</Form.Label>
            </Col>            
          </Form.Row>
          <Button style={{ width: '150px', margin: '10px', float: 'left'}}
                onClick={this.showValues}>Adionar</Button>
        </Form>
      </Container>          
      );
    }
  }

export default Cliente