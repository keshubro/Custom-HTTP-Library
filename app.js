const http = new easyHttp();


// GET Request
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
//   //This is a callback with two params : error, response(if no error)  
//     if(error === null)
//     {
//         console.log(posts);
//     }
//     else
//     {
//         console.log(error);
//     }
    
// });



//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//POST request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error === null)
//     {
//         console.log(post);
//     }
//     else
//     {
//         console.log(error);
//     }
// });


// PUT Request
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post){
    if(error === null)
    {
        console.log(post);
    }
    else
    {
        console.log(error);
    }
});


//DELETE Request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
  //This is a callback with two params : error, response(if no error)  
    if(error === null)
    {
        console.log(response);
    }
    else
    {
        console.log(error);
    }
    
});