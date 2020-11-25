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
            //If therer is an error, send the error code. And since we do not have any response in this case, we do not need to pass anything.
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request