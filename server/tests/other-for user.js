import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
chai.should();
let token;
describe('admin use to see mentor', () => {
before('admin should first login', (done) => {
  const user = {
    email: "admin@gmail.com",
    password: 'Aa1234'
  };
  chai.request(app)
    .post('/api/v1/signin')
    .send(user)
    .end((err, res) => {
      token = res.body.token;
    });
  done();
});

before('admin should first login', (done) => {
    const user = {
      email: "bonheur@gmail.com",
      password: 'Aa1234'
    };
    chai.request(app)
      .post('/api/v1/signin')
      .send(user)
      .end((err, res) => {
        token = res.body.token;
      });
    done();
  });


//   it('should not be able to see mentor if the mentor is not in the database', (done) => {
//     const id = 777;
//     const bearer = 'Bearer' + ' ' + token;
//     chai.request(app)
//     .patch(`/api/v1/mentor/${id}`)
//     .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImVsLjc0MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRQVWxZWVh3dDVsN29PbFZzSWRlQWV1OHljYlNtQVNxWThnL1V3Q3FyRFdFQ0lJMzdqLk1WeSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJsamZsa2RmbGtqZiIsIm9jY3VwYXRpb24iOiJsamZkbHhtbmZqZmQiLCJleHBlcnRpc2UiOiJsamhmZGtqZmRmZGYiLCJwb3NpdGlvbiI6InVzZXIiLCJpYXQiOjE1NjY4MDYzMTd9.fAc6KXqj7iPmpTgyD5aqX7V52gPZCYnkWaJ6QrqQtGM`)
//     .end((err, res) => {
//         res.body.should.have.property('status').eql(404)
//     });
//     done();
//   });

// it('should be able to see mentor if position is user', (done) => {
//   const id = 2;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImVsLjc0MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRQVWxZWVh3dDVsN29PbFZzSWRlQWV1OHljYlNtQVNxWThnL1V3Q3FyRFdFQ0lJMzdqLk1WeSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJsamZsa2RmbGtqZiIsIm9jY3VwYXRpb24iOiJsamZkbHhtbmZqZmQiLCJleHBlcnRpc2UiOiJsamhmZGtqZmRmZGYiLCJwb3NpdGlvbiI6InVzZXIiLCJpYXQiOjE1NjY4MDYzMTd9.fAc6KXqj7iPmpTgyD5aqX7V52gPZCYnkWaJ6QrqQtGM`)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(200)
//   });
//   done();
// });

// it('should be able to see mentor if position is admin', (done) => {
//   const id = 2;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImVsLmQ3NDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTGc3TUdEaWEuOEkxM3g2NWNRNVh6ZUxaMTk0dVRXNE5PSXVyL00zMndGVEFHVE5hblZBVm0iLCJhZGRyZXNzIjoiS2lnYWxpIiwiYmlvIjoibGpmbGtkZmxramYiLCJvY2N1cGF0aW9uIjoibGpmZGx4bW5mamZkIiwiZXhwZXJ0aXNlIjoibGpoZmRramZkZmRmIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2NjgwNjI3N30.JyM8nytExS8xYWMKlCAH5KaJLwPlMOAt46UndynfqSU

//   `)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(200)
//   });
//   done();
// });

// it('should not be able to see mentor if the position is mentor', (done) => {
//   const id = 1;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImVsLmI3NDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaW9oaTYveG91eWNRU3YzeTM3UHYydVZOWlpYdU1oM0t3U3BUVjladWMxV2c1bVk0NTZsODYiLCJhZGRyZXNzIjoiS2lnYWxpIiwiYmlvIjoibGpmbGtkZmxramYiLCJvY2N1cGF0aW9uIjoibGpmZGx4bW5mamZkIiwiZXhwZXJ0aXNlIjoibGpoZmRramZkZmRmIiwicG9zaXRpb24iOiJtZW50b3IiLCJpYXQiOjE1NjY4MDY0MDB9.EHYYk77p3WKhAeFkotRpWeEmpjATyAoJyTm5gr00uAs`)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(403)
//   });
//   done();
// });

});