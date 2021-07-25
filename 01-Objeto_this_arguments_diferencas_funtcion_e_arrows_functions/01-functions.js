// function minhaFunction(){
//   // Este
//   this.name = 'Ana';// propriedade do objeto,qunado a função é construida com new
//   // return ''
// }

// console.log(typeof minhaFunction());

// console.log(new minhaFunction());

// const minhaArrowFunction = () =>{
//   this.name = 'Ana';//esse this representa o node
// };

// minhaArrowFunction();

// console.log(typeof minhaArrowFunction());
// console.log(minhaArrowFunction());
// console.log(this);


// function minhaFunction(){
//  this.name = 'Ana';

//   const minhaArrowFunction = () =>{
//     this.lastName = 'Sousa';//esse this agora se refere a minhaFunction,pois está nesse contexto
//   };
  
//   minhaArrowFunction();
// }

// console.log(new minhaFunction());
// console.log(this);//esse this do node não retornará nada dessa vez pq a minhaArrowFunction está dentro de outro contexto

function soma(){
  // console.log(arguments);//retorna objeto
  // console.log(Object.values(arguments));//retorna os valores
}

// soma(1, 2, 3, 4, 5, 6, 7,'Ana');

function subtracao(argumentos,argumentos2){
  //console.log(argumentos);//retorna só o primeiro argumento
  console.log(argumentos,argumentos2);//retorna o primeiro e o segundo argumento

}

// subtracao(1,2,3,4,5,6,7,'Ana');

//recebendo os argumentos de forma dinamica com spread
function divisao(...argumentos){
  console.log(argumentos);
}

// divisao(1,2,3,4,5,6,7,'Ana');

function multiplicacao(primeiroArgumento,...argumentos){
  console.log({primeiroArgumento});//recebe o primeiro argumento, parametro enviado
  console.log({argumentos});//recebe todos os outros argumentos restantes
}

// multiplicacao(1,2,3,4,5,6,7,'Ana');

const calculo = ()=>{
  console.log(arguments);//retornara o node, pois é o contexto em que foi criado
}

// calculo(1,2,3,4,5,'Ana');

// FORMAS DE SE USAR ARROW FUNCTIONS

const arrow = () =>{
  console.log('Corpo da função');
}

const arrow2 = () => 'Corpo da função';//short syntax

const numero = 10;
const arrow3 = ()=>(
  numero >= 10
  ? 'Maior igual a 10'
  : 'Menor que 10'
);//o uso com parêteses serve para quando precisamos quebrar varias linhas


// console.log(arrow3());

const getUser = ()=>({
  id: '123',
  name: 'Ana'
}); // quando queremos retornar um objeto sem usar o return, basta envolvermos o objeto entre parenteses como acima

console.log(getUser());