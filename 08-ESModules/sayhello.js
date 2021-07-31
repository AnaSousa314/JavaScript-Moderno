function sayHello1(name){
  console.log(`Olá ${name}` );
}


// exportando dessa forma determinamos que o nome da função quando for exportada em outro arquivo terá esse nome específico
export {sayHello1};
// outra forma de fazer isso é 'export function nomeDaFuncao

const userName = "Ana"
// podemos fazer uma exportação default de outro elemento do arquivo mesmo já existindo outro tipo de exportação presente nela
export default userName

/* 
  Export default permite que demos qualquer nome a função no arquivo em que a exportarmos. Se fizermos a exportação de uma dessas duas  formas:
  1- export default function nomeDaFuncao

  ou ao final do arquivo

  2- export default nomeDaFuncao
*/

