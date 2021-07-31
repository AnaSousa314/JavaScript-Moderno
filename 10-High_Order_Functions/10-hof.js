const array = [
  {name: 'iPhone', price:'5000', quantity: '2'},
  {name: 'MacBook Pro', price:'20000', quantity: '1'},
  {name: 'Magic Mouse', price:'1001', quantity: '5'}
];


// .find & findIndex
const find = array.find((product)=> product.price > 40000);

const findIndex = array.findIndex((product)=> product.price > 4000);
// console.log(findIndex);


// .some & ervery  
const some = array.some((product)=> product.price < 1000);

const every = array.every((product)=> product.price > 1000)

// console.log(some);


// .map 
const map = array.map((product)=>({
  ...product,
  subtotal: product.price * product.quantity
}));

// console.log(map);

// .filter

const filter = array.filter((product)=> product.quantity > 1);

// console.log(filter);

const reduce = array.reduce((accumulator,product)=>{
  return accumulator + (product.price * product.quantity)
},0);

const reduce2 = array.reduce((accumulator,product)=>{
  console.log(accumulator);
  
},{name: 'ana'});
//na primeira iteração ele retorna name:ana na segunda e terceira ele retorna undefined
// console.log({reduce2});

