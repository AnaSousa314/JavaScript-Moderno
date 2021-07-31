// Aspas duplas e simples não permitem quebra de linha e tab
/* console.log('Esta é a primeira linha
  Essa é a segunda linha
'); */

// Template String permite quebra de linha,e interpolação de expressões JS

const name = 'Ana'

console.log(`Esta é a primeira linha
  Essa é a segunda linha
`);

console.log(`Seja bem vinda ${name}`);

console.log(`Seja bem vinda ${Math.random() > 0.5 ? 'Sim':'Não'}`);

