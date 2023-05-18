const express=require('express')

const server=express()


const cors=require('cors')
const logic=require('./service/logic')
// connect with FrontEnd

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

// port seting for server

server.listen(8000,()=>{
    console.log('server startes at part 8000');
})

server.get('/getAllEmlpyee',(req,res)=>{
        logic.allEmplloyee().then(result=>{
            res.status(result.statusCode).json(result)
        })
})

// 
server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// 
server.delete('/removeEmployee/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//

server.get('/getAnEmp/:id',(req,res)=>{
    logic.getAnEmp(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// 

server.post('/updateEmp',(req,res)=>{
    logic.updateEmp(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// 


server.get('/viewDetails/:id',(req,res)=>{
    logic.viewEmployee(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})