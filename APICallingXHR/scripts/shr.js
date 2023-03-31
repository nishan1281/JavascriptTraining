console.clear();
// console.log(window);  //run to check the API if found no installation.
/*method is defiende for GET or POST, URL is the API link, 
Datareceive arguments for sending it to server */

const makeRequest = (method, URL, dataReceive)=>{  

    return new Promise ((resolve, reject) =>{
    const xhr = new XMLHttpRequest();    // 1st
    xhr.open(method, URL);              // 2nd
    xhr.setRequestHeader ('content-type', 'application/JSON'); //3rd

    xhr.onload = () => {   
        let data = xhr.response;  //4th
        console.log(JSON.parse(data));
    }

    xhr.onerror=() => {console.log('Error is here')};

xhr.send(JSON.stringify(dataReceive)); // 5th
})
}

// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
// }
//getData();

const sendData=()=>{
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
sendData();

/*1st define function to take argument of task, target and datareived
Then 1st initiate a XMLHTTPrequest
2nd open the the request including URL
3rd Setting the content type to JSON by setRequestHeader
4th work with onload using a anonymous function. Load the data from the response
if required print it by parsing the data in console or use it.
5th send data to server by stringify datarecived
now for to use promise bind with resolve and reject from 1st to 5th step
for PUT/PATCH/DELETE method follow the API method to change
Now all done its upto me whether data send to server or get the data to page
*/