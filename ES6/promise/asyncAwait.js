const promise1 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("task1 completed");}, 2000);
        })
} 
     
const promise2 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("task2 completed");}, 2000);
        })
} 

const promise3 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("task3 completed");}, 2000);
        })
} 

async function callallTask() {
const task1 = await promise1(); console.log (task1);
const task2 = await promise2(); console.log (task2);
const task3 = await promise3(); console.log (task3)
}

//alternative with arrow functions and considering error if

const totalTasks = async ()=>{

    try{
        const task1 = await promise1(); console.log (task1);
        const task2 = await promise2(); console.log (task2);
        const task3 = await promise3(); console.log (task3)
    }
    catch (err) {console.log (err)};

}


callallTask();
totalTasks();
 