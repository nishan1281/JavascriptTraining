// /* A fetch request. */
// console.clear();
// fetch("https://jsonplaceholder.typicode.com/posts/781")
// // .then ((res)=>res.json())
// // .then((res)=>console.log(res))
// // .catch((err)=>console.log(err));  // it will not cacth error

// .then ((res) => {
//     if(!res.ok)  //meaning if response not ok
//     {
//         throw new Error(`Error is here: ${res.statusText}`);
//     }
//     return res.json();
// })

// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//for Async:

const makeRequest = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if(!res.ok)  //meaning if response not ok
    {
        throw new Error(`Error is here: ${res.statusText}`);
    }
    /* Waiting for the response to be converted to JSON. */
    const data = await res.json();
    return data;
};

const getData = () => {
    makeRequest()
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
};

getData();