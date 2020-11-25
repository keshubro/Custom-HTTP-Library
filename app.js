const http = new easyHttp();

http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
  //This is a callback with two params : error, response(if no error)  
    if(error === null)
    {
        console.log(posts);
    }
    else
    {
        console.log(error);
    }
    
});