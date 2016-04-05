var http = require('http');
var fs = require('fs');

/*
    I found a method of responding flexibly with items similar to this from Andy Zarzycki
     on stackoverflow.com

    I applied the method in a way easier for me to read and understand for the sake of practice.
 */
function onRequest(request, response){
    fs.readFile('../' + request.url, function(error, data) {
        if (!error) {
            var lastDot = request.url.lastIndexOf('.');
            var mimeForFile;
            if (lastDot==-1){
                mimeForFile='text/plain';
            }else{
                mimeForFile=request.url.substr(lastDot);
                switch(mimeForFile){
                    case '.html':
                        mimeForFile='text/html';
                        break;
                    case '.css':
                        mimeForFile='text/css';
                        break;
                    case '.js':
                        mimeForFile='text/javascript';
                        break;
                    case '.png':
                        mimeForFile='image/png';
                        break;
                    case '.jpg':
                        mimeForFile='image/jpeg';
                        break;
                }

            }
            response.setHeader('Content-Type', mimeForFile);
            response.end(data);
            console.log(request.url + " @ " + mimeForFile);

        } else {
            console.log('file not found: ' + request.url);
            response.writeHead(404, "Not Found");
            response.end();
        }
    });
}

http.createServer(onRequest).listen(8888);

console.log('Server now running');
console.log('../index.html');
