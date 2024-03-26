const app = require('./server')

app.get('/',(req,res)=>{
    res.send("App de Quiz")
})
port=4000
app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
})