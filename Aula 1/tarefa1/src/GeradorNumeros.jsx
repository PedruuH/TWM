
function Gerador() {
    return (     
        // Math.floor(Math.random()*59)+1
        // Math.random() retorna valores entre 0 e 1.
        // Ao multipicar por 59, temos um range ente [0 ... 59]
        // Math.floor() retorna apenas a parte inteira do número.
        // Necessário somar 1 ao resultado, pois a cartela da Sena possui contagem entre 01 ... 60.
      <div>
          <h1>1° Número:</h1>
          <h2>{ Math.floor(Math.random()*59)+1  } </h2>
          <h1>2° Número:</h1>
          <h2>{ Math.floor(Math.random()*59)+1 } </h2>
          <h1>3° Número:</h1>
          <h2>{ Math.floor(Math.random()*59)+1 } </h2>
          <h1>4° Número:</h1>
          <h2>{ Math.floor(Math.random()*59)+1 } </h2>
          <h1>5° Número:</h1>
          <h2>{ Math.floor(Math.random()*59) +1} </h2>
          <h1>6° Número:</h1>
          <h2>{ Math.floor(Math.random()*59) +1 } </h2>
      </div>
    );
  }
export default Gerador;