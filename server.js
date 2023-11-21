const express = require('express')
const { connectDb } = require('./db_connect')
const env = require('dotenv')
env.config()
const app = express()

app.use(express.json({}))

connectDb()
app.get('/',(req,res)=>{
res.send('Its Working !')
})

const doctorUserRoutes = require('./Routes/doctors/userRoutes')   
const patientUserRoutes = require('./Routes/patients/userRoutes')   

app.use('/doctor',doctorUserRoutes)
app.use('/patient',patientUserRoutes)

app.listen(8080,()=>{
    console.log("App running at http://localhost:8080")
})