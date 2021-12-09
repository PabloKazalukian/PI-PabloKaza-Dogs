const { Dog,Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

const dog ={
  name: 'dogi',
  height: '5-20',
  weight: '5-10', 
}

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', (done) => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('should throw an error if name is null')))
          .catch(() => done());
      });
      it('should throw an error if height is null', (done) => {
        Dog.create({
          name:'doggi',
          height: 5,
      })
      .then(() => done(new Error('should throw an error if height is null')))
          .catch(() => done());
      });
      it('should throw an error if heigth is null', (done) => {
        Dog.create({
          name:'doggi',
          weight: 5,
        })
          .then(() => done(new Error('should throw an error if weight is null')))
          .catch(() => done());
      });
    });
  });
});

