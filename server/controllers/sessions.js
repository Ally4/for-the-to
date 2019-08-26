import users from '../models/sessions';

const sessions = (req, res) => {
  if (req.user.position === 'mentor') {
    if (!users.length) {
      res.status(404).json({
        status: 404,
        message: 'no user found',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      data: users,
    });
  }
  else {
    res.status(403).json({
      status: 403,
      message: 'you are not a mentor to see the session'
    });
  }
};

export default sessions;