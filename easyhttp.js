/*
Why do we need a callback for GET request?
- Suppose we want to return the responseText to the app.js from where the get method was called.
    If we do it normally, it will give undefined !
    But if we use a callback, it works !!!
*/

function easyHttp()
{
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET request. It will receive a callback as a param
easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this; //To pertain the scope of the object
    this.http.onload = function(){
        if(self.http.status === 200)
        {
            // If there is no error, send the error param values as null
            callback(null, self.http.responseText);
        }
        else
        {
            //If there is an error, send the error code. And since we do not have any response in this case, we do not need to pass anything.
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


// Make an HTTP POST request
easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this; //To pertain the scope of the object
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    //For POST method, we need to send the data in JSON format
    this.http.send(JSON.stringify(data));
}



// Make an HTTP PUT request - Similar to POST
easyHttp.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this; //To pertain the scope of the object
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    //For POST method, we need to send the data in JSON format
    this.http.send(JSON.stringify(data));
}



// Make an HTTP DELETE request - Similar to GET
easyHttp.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this; //To pertain the scope of the object
    this.http.onload = function(){
        if(self.http.status === 200)
        {
            // If there is no error, send the error param values as null
            // callback(null, self.http.responseText); //self.http.responseText will be empty
            callback(null, 'Post Deleted');
        }
        else
        {
            //If there is an error, send the error code. And since we do not have any response in this case, we do not need to pass anything.
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}