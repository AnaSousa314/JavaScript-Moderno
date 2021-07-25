const user = {
  firstName: 'Ana',
  lastName: 'Sousa',
  full_name: 'Nome Completo',
  age: 25,
  skills: ['Back-end','Front-end'],
  arrayTeste: ['primeiro','segundo','terceiro']
}

// const firstName = user.firstName;
// const age = user.age;

// console.log(firstName,age);

// Destructuring de Objeto

const {firstName,age,skills,arrayTeste} = user;

console.log(firstName,age);

// Destructuring de array

// a primeira posição ficara na variavel primary e assim por diante
const [primary,secondary] = skills;

const qualquercoisa = skills;

console.log(skills);
console.log(primary);


// Renomenado variaveis desestruturadas
const {full_name: novoNome} = user;
console.log(novoNome);


// Teste pulando posições do array na desestruração

const [,,terceiro] = arrayTeste;

console.log(terceiro);