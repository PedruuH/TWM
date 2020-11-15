import React from 'react'
import alunos from './alunos'

export default props => {
    console.log(alunos)
    const li1 = 
    <li>
        {alunos[0].id} {alunos[0].nome} {`->`} {alunos[0].nota}
    </li>

    const listaTodos = alunos.map(aluno => {
        return (
        <li key={aluno.id}> 
            {aluno.id} {aluno.nome} {`->`} {aluno.nota}
            </li>
        )
    })


    return(
        <div>
            {li1}    
            <br></br>        
            {listaTodos}
            <ul>
                <li>Joao - 100</li>
                <li>Pedro - 60</li>
            </ul>
        </div>
    )
}

{/* <ul style={{ listStyle: "none"}}>                                 */}
// const lis = alunos.map(aluno => {
//     return <li key={aluno.id}> {aluno.id} {aluno.nome}</li>
// })
