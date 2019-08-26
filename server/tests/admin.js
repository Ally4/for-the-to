import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
chai.should();
let token;
describe('admin tasks', () => {
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

it('should change user to mentor', (done) => {
    const id = 1;
    const bearer = 'Bearer' + ' ' + token;
    chai.request(app)
    .patch(`/api/v1/change/${id}`)
    .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDF0UklZODlaeVJlMC5vczJKb0FWay5vWW5LVHdmY2VzelJjLmFMUjdkdlk0clZwODZZNUhhIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njc0ODkxMH0.M0NLJS0g7DxfSOELOc4Zz_wMfOg6PP3NK1aqUFRqmgk`)
    .end((err, res) => {
        res.body.should.have.property('status').eql(200)
    });
    done();
});

it('should not change user to mentor if user not found', (done) => {
  const id = 666;
  const bearer = 'Bearer' + ' ' + token;
  chai.request(app)
  .patch(`/api/v1/change/${id}`)
  .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDF0UklZODlaeVJlMC5vczJKb0FWay5vWW5LVHdmY2VzelJjLmFMUjdkdlk0clZwODZZNUhhIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njc0ODkxMH0.M0NLJS0g7DxfSOELOc4Zz_wMfOg6PP3NK1aqUFRqmgk`)
  .end((err, res) => {
      res.body.should.have.property('status').eql(404)
  });
  done();
});

it('should change not be able to change user to mentor if there is no token', (done) => {
  const id = 1;
  const bearer = 'Bearer' + ' ' + token;
  chai.request(app)
  .patch(`/api/v1/change/${id}`)
  .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZkVGWmhlQkJlZTFJVFVzS3Z6eC5CLnJsS1kwNWF1NkxYdGFycUJsMU1hWmtSWFI3L1B2S1MiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoiVXNlciIsImlhdCI6MTU2NjYyOTM4MH0.mFk2adhIBpeMimLKOK_eDsDit_hjUnuMlNC_yzUVgjs`)
  .end((err, res) => {
      res.body.should.have.property('status').eql(403)
  });
  done();
});


it('should change user to mentor', (done) => {
  const id = 1;
  const bearer = 'Bearer' + ' ' + token;
  chai.request(app)
  .patch(`/api/v1/change/${id}`)
  .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDF0UklZODlaeVJlMC5vczJKb0FWay5vWW5LVHdmY2VzelJjLmFMUjdkdlk0clZwODZZNUhhIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njc0ODkxMH0.M0NLJS0g7DxfSOELOc4Zz_wMfOg6PP3NK1aqUFRqmgk`)
  .end((err, res) => {
      res.body.should.have.property('status').eql(200)
  });
  done();
});

it('should not change user to mentor if user not found', (done) => {
const id = 666;
const bearer = 'Bearer' + ' ' + token;
chai.request(app)
.patch(`/api/v1/change/${id}`)
.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDF0UklZODlaeVJlMC5vczJKb0FWay5vWW5LVHdmY2VzelJjLmFMUjdkdlk0clZwODZZNUhhIiwicG9zaXRpb24iOiJhZG1pbiIsImlhdCI6MTU2Njc0ODkxMH0.M0NLJS0g7DxfSOELOc4Zz_wMfOg6PP3NK1aqUFRqmgk`)
.end((err, res) => {
    res.body.should.have.property('status').eql(404)
});
done();
});

it('should change not be able to change user to mentor if there is no token', (done) => {
const id = 1;
const bearer = 'Bearer' + ' ' + token;
chai.request(app)
.patch(`/api/v1/change/${id}`)
.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZkVGWmhlQkJlZTFJVFVzS3Z6eC5CLnJsS1kwNWF1NkxYdGFycUJsMU1hWmtSWFI3L1B2S1MiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoiVXNlciIsImlhdCI6MTU2NjYyOTM4MH0.mFk2adhIBpeMimLKOK_eDsDit_hjUnuMlNC_yzUVgjs`)
.end((err, res) => {
    res.body.should.have.property('status').eql(403)
});
done();
});





// it('should be able to see mentor if position is user', (done) => {
//   const id = 2;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZkVGWmhlQkJlZTFJVFVzS3Z6eC5CLnJsS1kwNWF1NkxYdGFycUJsMU1hWmtSWFI3L1B2S1MiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoiVXNlciIsImlhdCI6MTU2NjYyOTM4MH0.mFk2adhIBpeMimLKOK_eDsDit_hjUnuMlNC_yzUVgjs`)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(200)
//   });
//   done();
// });

// it('should not see the mentor if the id dont exist', (done) => {
//   const id = 999;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZkVGWmhlQkJlZTFJVFVzS3Z6eC5CLnJsS1kwNWF1NkxYdGFycUJsMU1hWmtSWFI3L1B2S1MiLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoiVXNlciIsImlhdCI6MTU2NjYyOTM4MH0.mFk2adhIBpeMimLKOK_eDsDit_hjUnuMlNC_yzUVgjs`)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(404)
//   });
//   done();
// });

// it('should not be able to see mentot if the position is not user', (done) => {
//   const id = 1;
//   const bearer = 'Bearer' + ' ' + token;
//   chai.request(app)
//   .patch(`/api/v1/mentor/${id}`)
//   .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJQYXRyaWNrIiwibGFzdE5hbWUiOiJSZW55IiwiZW1haWwiOiJwYXRvc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRmRUZaaGVCQmVlMUlUVXNLdnp4LkIucmxLWTA1YXU2TFh0YXJxQmwxTWFaa1JYUjcvUHZLUyIsImJpbyI6IlRlYWNoZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiUHVibGljLXNwZWFrZXIiLCJhZGRyZXNzIjoiUndhbmRhIiwicG9zaXRpb24iOiJVc2VyIiwiaWF0IjoxNTY2NjI5MzE4fQ.jwB3i_n6YrvWdOJI_CAWgBOuGviQH4pHzi5pNzwgql0`)
//   .end((err, res) => {
//       res.body.should.have.property('status').eql(403)
//   });
//   done();
// });

});