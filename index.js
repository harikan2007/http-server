const http = require("http");
const port = 8080;
const server = http.createServer();

const friends = [{
    id:1,
    name: "ramin",
    lastname:"choobineh"
},{
    id:2,
    name: "amin",
    lastname:"choobineh"
},{
    id:3,
    name: "negin",
    lastname:"choobineh"
},{
    id:4,
    name: "amir",
    lastname:"choobineh"
}]
server.on("request", (req, res)=>{
    const items = req.url.split("/");
    if (req.method === "POST" && items[1] === "friends"){
        req.on("data", (data)=>{
            friends.push(JSON.parse(data.toString()))
        })
        req.pipe(res)
    }
    else if (req.method === "GET" && items[1] === "friends"){
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    if (items.length === 3){
        const friendIndex = Number(items[2]);
        res.end(JSON.stringify(friends[friendIndex]));
    }else{
        res.end(JSON.stringify(friends));
    }
    }
     else if (items[1] === "messages"){
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