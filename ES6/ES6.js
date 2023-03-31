
const studentInfo = ({id, name1}) =>{
    console.log(`Task-2: ${id}, ${name1}`)
}

const student = 
    {
        id : 101,
        name1 : 'nishan',
        GPA : 2.4
    }

// const {id, name1} = student
// console.log(id, name1)



const task_1 = () => {console.log ("task.1")};
const task_2 = () => {
    setTimeout(() => {
        studentInfo(student)
    }, 1000);
    };

const task_3 = () => {console.log ("task.3")};

task_1();
task_2();
task_3();

function square(x) {
    console.log(`square of ${x}: ${x*x}`);
    }

    //square(6);
    // const y = square;
    // y(6);

function higherOrderFunction (num, callback){
    callback(num);
}

higherOrderFunction(8, square);

//controlling the task flow of 5

const task_4 = (callback) => {console.log ("task.4")
callback(); //call back function to control the flow
};

const task_5 = (callback) => {
    setTimeout(() => {
        console.log('task 5')
        callback();
    }, 1000);
};

const task_6 = () => {console.log ("task.6")};

// task_4(function f1() {
//     task_5(function f2(){
//         task_6();
//     });
// })

task_4(() =>task_5(()=>task_6()))



