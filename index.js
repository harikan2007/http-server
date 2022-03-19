const http = require("http");
const port = 8080;
const server = http.createServer();

server.on("request", (req, res)=>{
    if (req.url === "/friends"){
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({
        id:1,
        name: "ramin",
        lastname:"choobineh"
    }));} else if (req.url === "/messages"){
        res.statusCode =200;
        res.setHeader ("Content-Type","text/html");
        res.write("<html>")
        res.write("<body>")
        res.write("<ul>")
        res.write("<li> this ramin!</li>")
        res.write("<li> this is the second message</li>")
        res.write("</ul>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    } else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, ()=>{
    console.log(`Listening on port ${port}` )
})