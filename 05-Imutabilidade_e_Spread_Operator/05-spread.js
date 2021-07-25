const user = {
  firstName: 'Ana',
  lastName: 'Sousa',
  full_name: 'Nome Completo',
  age: 25,
  skills: ['Back-end','Front-end','Mobile'],
  active: false
}



// dessa forma estamos quebrando o principio da imutabilidade do React
// user.active = true
//Object.assign(user,{active: true});

// preservando as propriedades do objeto, obedecendo o principio
const updatedUser = {
  firstName: user.firstName,
  lastName: user.lastName,
  full_name: user.full_name,
  age: user.age,
  skills: user.skills,
  active: true
}

console.log({user});
// console.log({updatedUser});


// Spread (espalhar) Operator
// ele pega as propriedades de um objeto e o "espalha" dentro de outro

const updatedUser2 = {user}//assim teremos um objeto dentro de outro

const updatedUser3 = {...user}//aqui temos a mesmas propriedades de user

// console.log(updatedUser3);

const updatedUser4 = {
  ...user,
  active: true//como o que vale é a ultima variavel declarada, ele muda o valor do active presente no spread de user
}


console.log({updatedUser4});

// Spread em array
const updatedUser5 = {
  ...user,
  skills: [...user.skills,'Markerting'],
  active: true
}

console.log({updatedUser5});


// diferente do rest no spread a propriedade espalhada pode vir em qualquer lugar, pode ser a primeira, segunda, tanto faz. No entanto, por conta da regra de que a ultima variavel declarada é a que conta se você fizer da forma abaixo, as skills que valerão será a do spread de user, e não a nova com o valor marketing

const updatedUser6 = {
  skills: [...user.skills,'Markerting'],
  ...user,
  active: true
}

console.log({updatedUser6});