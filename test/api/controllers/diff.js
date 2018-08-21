const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('controllers', function() {

  describe('diff', function() {

    describe('Post /diff', function() {

      it('should return an error when payload empty', function(done) {

        request(server)
          .post('/diff')
          .send({})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.exist(err);
            res.statusCode.should.eql(400);

            const error = JSON.parse(res.error.text);

            error.code.should.eql('SCHEMA_VALIDATION_FAILED');
            error.message.should.eql('Request validation failed: Parameter (body) failed schema validation');

            done();
          });
      });

      it('should return correct sum answer', function(done) {

        request(server)
          .post('/diff')
          .send({a: 10, b: 2})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.diff.should.eql(8);

            done();
          });
      });

    });

  });

});
