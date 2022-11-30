// async function myFunc(){
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; //wait until promise is resolved
//     return res;
//   }else{
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

//the above works ok but Fetch is better
async function getUsers(){
  // await the response of the fetch call
  const response = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  // only proceed once the promise is resolvced
  const data = await response.json();
  // only proceed once the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));