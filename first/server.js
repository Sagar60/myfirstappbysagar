// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(504, {'Content-Type': 'text/html'});
//   res.end('Hello World!'+'Welcome to my server');
// }).listen(8080);


// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/html'))

// // app.get('/',(req,res)=>{
// //     res.send('Hello Sagar');
// // })
// app.get('/cal',(req,res)=>{
//     let result = 0;
//     const q1 = parseInt(req.query.q1);
//     const q2 = parseInt(req.query.q2)
//     result = q1+q2;
//     res.send(`
//         <h3> Answer is ${result} </h3>
//     `
    
//     );
// });
// app.get('/cal/:oper',(req,res)=>{
//     let result = 0;
//     const q1 = parseInt(req.query.q1);
//     const q2 =  parseInt(req.query.q2);
//     result = q1+q2;

//     res.send(`${result}`);
    
// })

// const port = process.env.PORT || 8080
// app.listen(port,()=>{
//     console.log(`Server started at ${port}`);
// })

