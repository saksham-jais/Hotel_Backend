const jwt = require('jsonwebtoken');
const jwtAuthMiddleware =(req,res,next)=>{
   // First Check Request Headers Has Authorization Or Not
   const authorization =req.headers.authorization;
   if(!authorization)
      return res.status(401).json({error:"Token Not Found"});
    //Extract Thw jwt token from the request headers
   const token = req.headers.authorization.split(' ')[1];
   if(!token) return res.status(401).json({error:"unauthorized"});
   try {
      // verify the JWT token
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      //Attach user information to the request object
      req.user = decoded;
      next();
      
   } catch (error) {
        console.log(error);
        res.satus(401).json({error:"Invalid Token"});
     }
}

// Funcion To Generate JWT Token
const generateToken=(userData)=>{
    // Generate A New JWT Token Using User Data
   //  return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:30})
    return jwt.sign(userData,process.env.JWT_SECRET)
}
module.exports={jwtAuthMiddleware,generateToken};