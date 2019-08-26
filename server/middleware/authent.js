//import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authent = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  
    if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    }else{
      res.status(403).json({
        status: 403,
        error: 'Forbidden'
      });
    }
  }

  export default authent;

// const authent = (req, res, next) => {
//     const bearerHeader = req.headers['authorization'];
//     if (bearerHeader !== undefined) {

//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         const data = jwt.verify(bearerToken, process.env.THE_KEY, (error, loggedin));
//             if (!data) {
//                 throw new Error("Authentication failed");
//             } else {
//                 req.token = bearerToken;
//                 req.user = data;
//             }
//         next();

//     } else {
//         res.status(403).send("Auth failed")
//     }
// }

// export default authent;


