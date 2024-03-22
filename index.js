const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use((req, res, next) => {
    res.header("Content-Range", "posts 0-20/20")
    next() // Continue to JSON Server Router   
   });

server.use(router);

server.listen(port);