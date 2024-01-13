const jwt = require('jsonwebtoken')

const admin = {
    email:process.env.ADMIN_EMAIL,
    password:process.env.ADMIN_PASSWORD
}

const adminLogin = async (req,res,next) => {
    try{
        const {email,password} = req.body
        if(email != admin.email || password != admin.password){
            return res.status(401).json({
                message:"Invalid email or password"
            })
        }
        const token = jwt.sign({
            email:admin.email,
            password : admin.password
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