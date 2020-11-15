import React from 'react'
import alunos from './alunos'

export default props => {
    function situacao(x1,x2,x3,x4)
    {   var A=(x1+x2+x3+x4)
        if(A >= 60)
         return 'Aprovado com ' + A + ' pontos.'
       else 
         return 'Reprovado com ' + A + ' pontos.'
    }
    
    const listaTodos = alunos.map(aluno => {
        return (
        <li > 
             {aluno.nome}
             {` - 1ª nota: `} {aluno.nota_1}
             {` - 2ª nota: `} {aluno.nota_2} 
             {` - 3ª nota: `} {aluno.nota_3} 
             {` - 4ª nota: `} {aluno.nota_4} {' - '}
             {situacao(aluno.nota_1,aluno.nota_2, aluno.nota_3,aluno.nota_4)}
            </li>
        )
    }) 
    return(
        <div>
            <h1>Alunos:</h1> 
            <br></br>        
            {listaTodos}
            
        </div>
    )
}

