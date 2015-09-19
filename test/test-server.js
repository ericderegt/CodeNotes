process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');

var should = chai.should();
chai.use(chaiHttp);

describe('Notes', function() {
  it('should list all notes on /api/notes GET', function(done) {
    chai.request(server)
      .get('/api/notes')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  
  it('should add a single note /api/notes POST', function(done) {
    chai.request(server)
      .post('/api/notes')
      .send({title: "React", content: "Training site", link: "http://www.react-training.com", category: "JavaScript"})
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('title');
        res.body.should.have.property('content');
        res.body.should.have.property('link');
        res.body.should.have.property('category');
        res.body.title.should.equal('React');
        res.body.content.should.equal('Training site');
        res.body.link.should.equal('http://www.react-training.com');
        res.body.category.should.equal('JavaScript');
        done();
    })   
  });
  
  it('should delete a single note on /api/notes/:id DELETE');
});