const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const {adminCredentials} = require('../utils/admin.constant')

const adminLogin = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        if(email != adminCredentials.email){
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, adminCredentials.password )
        if(!isPasswordValid)
            return res.status(403).json({
                message : "Invalid Credentials"
            })
        const token = jwt.sign({
            id:adminCredentials.id
        },process.env.JWT_SECRET,{
            expiresIn:"2 days"
        })
        res.status(200).json({
            message:"Login successful",
            token: token
        })
    }catch(error){
        next(error)
    }
}

module.exports = {adminLogin}
