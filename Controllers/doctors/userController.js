const Doctor = require("../../Modals/Doctor")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const RegisterDoctor = async(req,res) =>{

    try {
            try {
                const alreadyDoctor = await Doctor.findOne({email:req.body.email})
                console.log(alreadyDoctor)
                if(alreadyDoctor){
                    res.status(409).send({
                        details:"Doctor already there",
                        data:""
                    })
                }
                else{
                    const password = await bcrypt.hash(req.body.password,saltRounds);
                    req.body.password = password
                    const response = await Doctor.create(req.body)
                    res.status(201).send({
                        details:"Register created successfully",
                        data:response
                    })
                }
               
            } catch (error) {   
                res.status(400).send({
                    details:"Error in creating new Doctor",
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


const LoginDoctor= async (req,res) =>{

    try {
            const response = await Doctor.findOne({email:req.body.email})
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


module.exports ={RegisterDoctor  , LoginDoctor}
