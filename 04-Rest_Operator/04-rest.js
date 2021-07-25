const user = {
  firstName: 'Ana',
  lastName: 'Sousa',
  full_name: 'Nome Completo',
  age: 25,
  skills: ['Back-end','Front-end','Mobile'],
  arrayTeste: ['primeiro','segundo','terceiro']
}


// Rest Operator

// o rest sempre deve ser a ultima variavel declarada na desestruturacao
const {firstName,skills,...resto} = user;
const [primary,...restoSkills] = skills;

console.log(resto);
console.log(restoSkills);


