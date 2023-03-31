const promise1 = new Promise ((resolve, reject)=>{
   setTimeout(()=>{
    resolve ("task1 completed");}, 2000);
     })   
    
const promise2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve ("task2 completed");}, 1000);
      
    })
    
Promise.race([promise1, promise2]).then(res =>console.log(res));

const print = ()=> "checking the synchronous";
console.log(print());

							
