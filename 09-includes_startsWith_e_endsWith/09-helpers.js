const tech = 'Node.js';
const techs = ['Node.js','React','TypeScript']

const includesString = tech.includes('.');
const includesArray = techs.includes('React');

const startsWith = tech.startsWith('Nod')
const endsWith = tech.endsWith('.js')

console.log({endsWith});



//é case sensitive: includes, startswith, endsWith

//o includes de array exige que seja dado o nome do elemento dentro array completo, ele não busca partículas nesse caso