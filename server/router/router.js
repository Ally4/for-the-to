import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import getMentors from '../controllers/mentors';
import change from '../controllers/change';
import create from '../controllers/create';
import getAMentor from '../controllers/mentor';
import authent from '../middleware/authent';
import accept from '../controllers/accept';
import reject from '../controllers/reject';
import getUsers from '../controllers/users';
import sessions from '../controllers/sessions';


  

const router = express.Router();

//For the signup
router.post('/api/v1/signup', signup);

//for the signin
router.post('/api/v1/signin', signin);

//for a mentor by id
router.get('/api/v1/mentor/:id', authent, getAMentor);


//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);

//for the patches
router.patch('/api/v1/change/:id', authent, change);

//for the creation of the session
router.post('/api/v1/create', authent, create);

//for the mentor to accept the session
router.patch('/api/v1/accept/:id', authent, accept);

//for the mentor to reject the session
router.patch('/api/v1/reject/:id', authent, reject);

//for getting all the users
router.get('/api/v1/users', authent, getUsers);

//for getting the sessions
router.get('/api/v1/sessions', authent, sessions);

export default router; 