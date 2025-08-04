import express from 'express' //ESM EcmaScritp Modules
const app = express()


//Routing

app.get('/', (req, res)=>{
    res.send('hola mundo en express / typescript')
})

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log('servidor funcionando en el puerto:' , port)
})