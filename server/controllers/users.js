import users from '../models/users';

const getUsers = (req, res) => {
  console.log(req.user.position);
  if (req.user.position === 'admin') {
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
      message: 'you are not the admin to see all the users'
    });
  }
};

export default getUsers;