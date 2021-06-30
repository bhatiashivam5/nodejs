const http = require("http");
const fs = require('fs')

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);
    if (url === '/'){
        res.write('<html>');
      
        res.write('<head><title>Enter Message</title></head>');
          res.write(' <label for="html">Enter Message</label>');
          res.write('<body><form action="/message" method="POST"><input type="text" name"message"><button type="submit">Send</button></form></body>');
          res.write('</html>');
          return res.end();
    }
    if (url ==='/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'Shivam');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello i am learning nodejs <h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
})