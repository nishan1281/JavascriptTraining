// const s1 = require ('./student');

const fs = require('fs');

fs.writeFileSync('demo.txt', "This is a simple text.", (err)=>{

    if (err) {
        console.log(err);}

        else {
            console.log("successfully wrote ");
        }

})

//to add


fs.appendFile('demo.txt', " My name is nishan", (err)=>{

    if (err) {
        console.log(err);}

        else {
            console.log("successfully wrote");
        }

})

//to read

fs.readFile('demo.txt', 'utf-8', (err, data)=>{

    if (err) {
        console.log(err);}

        else {
            console.log(data);
        }

})





// console.log(s1.getAge());
// console.log(s1.getName());

//for single function calling
 //const {getName} = require ('./student')