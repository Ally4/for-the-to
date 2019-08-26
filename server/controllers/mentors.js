import users from '../models/users';

const mentors = (req, res) => {
  if (req.user.position === 'user' || req.user.position === 'admin') {
    const findMentors = users.filter(user => user.position === 'mentor');
    return res.status(200).json({
      status: 200,
      data: {
        findMentors
      },
    });
  }
  return res.status(403).json({
    status: 403,
    error: 'You are not allowed to see the mentors',
  });
}


export default mentors;