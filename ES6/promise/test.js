const promise1 = new Promise ((resolve, reject)=>{
let tasks = true;
if(tasks){
    resolve ("task1 completed");
    }
    else {
        reject ("task1 failed");
    }
})

const promise2 = new Promise ((resolve, reject)=>{
    let task2 = true;
    if(task2){
        resolve("promise 2 is completed")
    }
    else {reject ("promise 2 is not completed")}
})



// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

promise1
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

promise2
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

Promise.all([promise1, promise2])
            .then (([res1, res2]) => console.log(res1))

console.log("checking the synchronous");