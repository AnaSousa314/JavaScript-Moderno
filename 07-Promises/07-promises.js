new Promise((resolve,reject)=>{
  // console.log('dentro da promise');
});

// Essa função que passamos para dentro da promise é uma função sícrona, ela é jogada dentro da Call Stack e executada lá 

// const apiCall =  new Promise((resolve,reject)=>{
//   // console.log('dentro da promise');

//   //essa promise só é executada se usarmos o resolve ou o reject, caso contrário ela fica pendente
//   resolve('Sucesso')
// });

// console.log(apiCall);

// const apiCall2 =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Sucesso!')
//   },3000)
// });

// console.log(apiCall2);

// const apiCall3 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('Sucesso!')
//     },3000)
//   });

// apiCall3.then((response)=>{console.log(apiCall3)});

// //assim pegamos o resultado dentro da promisse
// apiCall3.then((response)=>{
//   console.log(response);
// })

// Capturando erros
// const apiCall4 =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject('Erro!')
//   },3000)
// });

// // apiCall4.then((response)=>{console.log(apiCall4)});

// //assim pegamos o resultado dentro da promisse
// apiCall4.then((response)=>{
// console.log(response);
// }).catch((error)=>{
//   console.log(error);
// })


// async/await
// const apiCall5 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Sucesso')
//   },2000) 
// });

// async function run(){
//   const resposta = await apiCall5;
//   console.log(resposta);
// }

// run()


// Com o await, a função é mantida dentro da call stack até que a promise seja finalizada

// Para capturarmos os erros dentro de uma função assíncrona usamos o try/catch

const apiCall6 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('Erro!')
  },2000) 
});

// async function run2(){
//   try {
//     const resposta = await apiCall6;
//     console.log(resposta);
    
//   } catch (error) {
//     console.log(error);  
//   }
// }

// run2()

apiCall6.then((response)=>{
  console.log(response);
  }).catch((error)=>{
    console.log(error);
})

console.log('Depois da promise');


/* A diferença entre o async e o .then, é que o then manda a nossa promise para o callback queue e continua executando o restante do código enquanto isso. Ele não trava a Call Stack */

/* Já o async trava o código na call stack até que a promise seja executada */

