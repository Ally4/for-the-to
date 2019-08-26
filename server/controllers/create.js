import sessions from '../models/sessions';
import dotenv from 'dotenv';

dotenv.config();


const create = (req, res) => {

    if (req.user.position === 'user') {
        const session = {
            mentorId: req.body.mentorId,
            question: req.body.question,
            menteeEmail: req.user.email,
            menteeId: req.user.id,
            status: 'pending'
        };
        session.id = sessions.length + 1;
        sessions.push(session);
        res.status(201).json({
            status: 201,
            data: session,
        });
    }
    else {
        res.status(403).json({
            status: 403,
            message: 'you are not a user to create a session'
        });
    }
};

export default create;