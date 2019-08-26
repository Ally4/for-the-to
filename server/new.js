// const router = require('express').Router();
// const fs = require('fs');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Joi = require('@hapi/joi');
// const signin = require('./signin');
// const users = require('../users');

// router.get('/mentors/:id', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, loggedUser) => {
//     // read users file
//     //const read = fs.readFileSync('users.json');
//     //const users = JSON.parse(read);
//     const user = users.find(c => c.id === parseInt(req.params.id));

//     if(err){
//       res.status(403).json({
//         status: 403,
//         error: 'Forbidden'
//       });
//     // users are allowed to access this route  
//     }else if(loggedUser.user.user_type !== 'user'){
//       res.status(403).json({
//         status: 403,
//         error: 'You are not allowed to access this route'
//       });
//     // throw error if user id not exists  
//     }else if(!user){
//       res.status(404).json({
//         status: 404,
//         error: 'Mentor with the given ID does not exists' 
//       }) 
//     // throw error when the user type is not a mentor  
//     }else if(user.user_type !== "mentor"){
//       res.status(400).json({
//         status: 400,
//         error: 'Bad request, check the ID and try again'
//       });
//     // display the result  
//     }else{
//       res.status(200).json({
//         status: 200,
//         data: {
//           user
//         }
//       });
//     }
//   })   
// });



// // Verify Token
// function verifyToken(req, res, next){
//   const bearerHeader = req.headers['authorization'];

//   if(typeof bearerHeader !== 'undefined'){
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   }else{
//     res.status(403).json({
//       status: 403,
//       error: 'Forbidden'
//     });
//   }
// }

// module.exports = router;

