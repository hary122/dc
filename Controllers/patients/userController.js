const Patient = require("../../Modals/Patient")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const RegisterPatient = async(req,res) =>{

    try {
            try {
                const alreadyUser =  await Patient.findOne({email:req.body.email})
                if(alreadyUser){
                    res.status(409).send({
                        details:"Patient already there",
                        data:""
                    })
                }
                else{
                    const password = await bcrypt.hash(req.body.password,saltRounds);
                    req.body.password = password
                    const response = await  Patient.create(req.body)
                    res.status(201).send({
                        details:"Patient created successfully",
                        data:response
                    })
                }

                
            } catch (error) {
                res.status(400).send({
                    details:"Error in creating new Patient",
                    data:error.message
                })
            }

    } catch (error) {
        res.status(500).send({
            details:"Internal Server Error",
            data:error.message
        })
    }

}

const LoginPatient = async (req,res) =>{

    try {
        const response = await Patient.findOne({email:req.body.email})
        if(response){
            const match = await bcrypt.compare(req.body.password , response.password)
                if(match){
                    try {
                        const access_token =   jwt.sign({response},process.env.SECRET,{expiresIn:'1h'})
                        const refresh_token =  jwt.sign({response},process.env.SECRET,{expiresIn:"1d"})
                        res.status(200).send({
                            details:"login Successfull",
                            data:{
                                access_token:access_token,
                                refresh_token:refresh_token
                            }
                        })
                       } catch (error) {
                        res.status(500).send({
                            details:"Error in creating token",
                            data:error.message
                        })
                       }
                }
                else{
                    res.status(401).send({
                        details:"Wrong password",
                        data:""
                    })
                }

       
        }
        else{
            res.status(404).send({
                details:"User Not Found",
                data:""
            })
        }
        
} catch (error) {
    res.status(500).send({
        details:"Internal Server Error",
        data:error.message
    })
}

}



module.exports ={  RegisterPatient  ,LoginPatient }
