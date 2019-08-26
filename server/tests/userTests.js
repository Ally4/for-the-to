import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
chai.should();

describe('user test', () => {

it('should be able to signup with full information', (done) => {
  const user = {
    firstName: 'NENGO',
    lastName: 'Ally',
    email: 'el.ally741@gmail.com',
    password: 'Aa1234',
    address: 'kigali',
    bio: 'Teacher',
    occupation: 'Developer',
    expertise: 'Public-speaker',
    position: 'user'
  };
  chai.request(app)
    .post('/api/v1/signup')
    .send(user)
    .end((err, res) => {
      res.body.status.should.be.equal(201);
      res.body.should.have.property('data');
      res.body.should.have.property('token');
    });
  done();
});

it('should not be able to signup for duplicate', (done) => {
  const user = {
    firstName: 'NENGO',
    lastName: 'Ally',
    email: 'el.ally741@gmail.com',
    password: 'Aa1234',
    address: 'kigali',
    bio: 'Teacher',
    occupation: 'Developer',
    expertise: 'Public-speaker',
    position: 'user'
  };
  chai.request(app)
    .post('/api/v1/signup')
    .send(user)
    .end((err, res) => {
      res.body.status.should.be.equal(409);
    });
  done();

});
it('should not be able to signup for missing information', (done) => {
  const user = {
    firstName:'',
    lastName: 'Ally',
    email: 'el.ally741@gmail.com',
    password: 'Aa1234',
    address: 'kigali',
    bio: 'Teacher',
    occupation: 'Developer',
    expertise: 'Public-speaker',
    position: 'user'
  };
  chai.request(app)
    .post('/api/v1/signup')
    .send(user)
    .end((err, res) => {
      res.body.status.should.be.equal(400);
    });
  done();
});

it('should be able to sign in with a signed up account', (done) => {
  const user = {
    email: 'el.ally741@gmail.com',
    password: 'Aa1234',
  };
  chai.request(app)
  .post('/api/v1/signin')
  .send(user)
  .end((err, res) => {

    res.body.status.should.be.equal(200);
    res.body.should.have.property('token');
  });
  done();
});

it('should not be able to sign in without a signed up account', (done) => {
  const user = {
    email: 'bahati.ally741@gmail.com',
    password: 'Aa1234',
  };
  chai.request(app)
  .post('/api/v1/signin')
  .send(user)
  .end((err, res) => {
    res.body.status.should.be.equal(404);
  });
  done();
});

it('should not be able to sign in with wrong password', (done) => {
  const user = {
    email: 'el.ally741@gmail.com',
    password: 'Aa1bcd234',
  };
  chai.request(app)
  .post('/api/v1/signin')
  .send(user)
  .end((err, res) => {
    res.body.status.should.be.equal(400);
  });
  done();
});

it('should not be able to sign in without password', (done) => {
  const user = {
    email: 'el.ally741@gmail.com'
  };
  chai.request(app)
  .post('/api/v1/signin')
  .send(user)
  .end((err, res) => {
    res.body.status.should.be.equal(400);
  });
  done();
});

it('should not be able to sign in with invalid email', (done) => {
  const user = {
    email: 'el.ally741gmail.com',
    password: 'Aa1234'
  };
  chai.request(app)
  .post('/api/v1/signin')
  .send(user)
  .end((err, res) => {
    res.body.status.should.be.equal(400);
  });
  done();
});


});