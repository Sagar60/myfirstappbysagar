

const express = require('express');
const path = require('path');
const app = express();






// const express = require('express');
// const app = express();

// app.use(express.static(__dirname+ '/first'));		// dist/'file package name'

app.use(express.static(__dirname + '/first/html'))

// app.get('/',(req,res)=>{
//     res.send('Hello Sagar');
// })
app.get('/cal',(req,res)=>{
    let result = 0;
    const q1 = parseInt(req.query.q1);
    const q2 = parseInt(req.query.q2)
    result = q1+q2;
    res.send(`
        <h3> Answer is ${result} </h3>
    `
    );
});
app.get('/cal/:oper',(req,res)=>{
    let result = 0;
    const q1 = parseInt(req.query.q1);
    const q2 =  parseInt(req.query.q2);
    result = q1+q2;

    res.send(`${result}`);
    
})


app.get('/*',function(req,res) {
		res.sendFile(path.join(__dirname+'/first/')); 	//here also name change as per app name
	});
	app.listen(process.env.PORT || 8080,()=>{
		console.log('server started at 8080');
	} )

