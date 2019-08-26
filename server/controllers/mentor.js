import users from '../models/users';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();


const getAMentor = (req, res) => {

  jwt.verify(req.token, process.env.THE_KEY , (theUser) => {

    if(err){
      res.status(403).json({
        status: 403,
        error: 'auth failed'
      })
    }
  
    if (theUser.user.position === 'user' || theUser.user.position === 'admin') {
  
      //const mentor = mentors.find(i => i.id === parseInt(req.params.id));
      const user = users.find(i => i.id === parseInt(req.params.id));
      if (theUser.user.position !== 'mentor') {
        return res.status(404).json({
          status: 404,
          message: 'The mentor is not is our database',
        });
      }
      else {
        res.status(200).json({
          status: 200,
          message: 'Here is the mentor',
          data: user
        });
      }
    }
    else {
      res.status(403).json({
        status: 403,
        message: 'you are not a user to see the mentor'
      });
    }
  }
  );  

}

export default getAMentor;