const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001
server.use(middlewares);

server.use((req, res, next) => {
    //res.headers("Content-Range", "posts 0-20/20")
    res.headers['X-Total-Count'] = '30' 
   res.headers['Access-Control-Expose-Headers'] = 'Content-Range'
   res.headers["Content-Range"] = "bytes: 0-9/*"
    next() // Continue to JSON Server Router   
   });

server.use(router);

server.listen(port);
