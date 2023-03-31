function square(x) {console.log(`square of ${x}: ${x*x}`);}

    //square(6); const y = square; y(6);

function higherOrderFunction (num, callback){callback(num);}
higherOrderFunction(8, square);

//controlling the task flow of 5

const task_4 = (callback) => {console.log ("task.4")
callback();}; //call back function to control the flow 

const task_5 = (callback) => {
    setTimeout(() => {
        console.log('task 5')
        //callback(); //it is required if go for task 6
    }, 1000);
};

const task_6 = () => {console.log ("task.6")};

//singe unit to understand:
task_4(function f1() {task_5();})

//reqquired the below code if for task 6
// task_4(function f1() {
//     task_5(function f2(){
//         task_6();
//     });
// })

// task_4(() =>task_5(()=>task_6()))