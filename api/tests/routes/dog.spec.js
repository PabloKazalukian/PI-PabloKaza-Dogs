/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog,Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height:"170-200",
  weight:"90-100",
};
const dog2 = {
  name: 'Perrito Malvado',
  height:"10-20",
  weight:"9-10",
};
const dogi={}

describe('Dog ', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('GET Dogs', () => {
    beforeEach(() => Dog.sync({ force: true })
      .then(() => Dog.create(dog)));
    describe(' /dogs',()=>{
      it('should get 200', () =>{
        return agent.get('/api/dogs').expect(200)
      })
      it('all the dogs should be',()=>{
        return agent.get('/api/dogs').expect(e => expect(e.body.length>1).equal(true))
      })
      it('the created dog should be added',  function() {
        return agent 
          .get('/api/dogs') 
          .expect((res)=> {
            return expect(res.body[res.body.length-1]).contain(dog); 
          });
      })
      describe(' Query name',()=>{
        it('should search by query',()=>{
          return agent
          .get('/api/dogs?name=pug')
          .expect(r =>{
            return expect(r.body.length>3).equal(true);
          })
        })        
      })
    })
  });
  describe(' Dogs/:idRaza', () => {
    beforeEach(() => Dog.sync({ force: true })
      .then(() => Dog.create(dog2)));
    it('Temeprament is empty',()=>{
      return agent
      .get('/api//dogs/1')
      .expect(r =>{
        return expect(r.body.name).equal('Affenpinscher')
      })
    })
  });
  
}).timeout(15000);


describe('GET Temperament',()=>{
  beforeEach(() => Temperament.sync({ force: true })
  .then(()=> Temperament.create({name:1})));
  it('temperament is empty',()=>{
    return expect(Temperament.length).equal(0)
  }).timeout(15000)
  describe('/temperament',()=>{
    it('should get 200',()=>{
      return agent
      .get('/api/temperament')
      .expect(200)
    }).timeout(15000)
    it('add temperaments',()=>{
      expect(Temperament.length).equal(0)
      return agent
      .get('/api/temperament')
      .expect(e => expect(e.body.length>0).equal(true))
    }).timeout(15000)
  })
})


describe('POST dog',()=>{
  // beforeEach(() => Dog.sync({ force: true })
  // .then(() => Dog.create(dog2)));
  const dog2 = {
    name: 'Perrito Malvado',
    heightMin:10,
    heightMax:20,
    weightMin: 5,
    weightMax: 15,
    life_span: "20",
    temperament:[1,3]
  };
  const dogError = {
    name: null,
    heightMin:10,
    heightMax:20,
    weightMin: 5,
    weightMax: 15,
    life_span: "20",
    temperament:[1,3]
  };
  const dogmessy={
    name: 'Perrito Malvado',
    heightMin:"10",
    heightMax:"20",
    weightMax: 5,
    weightMin: 15,
    life_span: "20",
    temperament:[1,3]
  }
  beforeEach(() => Dog.sync({ force: true })
  .then(() => Dog.create(dog))
  .then(()=> agent.get('/api/temperament')));
  describe('get /dog',()=>{
    it('should get 200',()=>{
      return agent
      .get('/api/dog')
      .expect(200);
    })
    it('backup',()=>{
      return agent
      .get('/api/dog')
      .then((e)=> expect(e.body[0]).contain(dog));
    })
  }).timeout(15000)

   it('add Dog2',()=>{
    return agent
    .post('/api/dog')
      .send(dog2).expect(200)
   })
   it('add error',()=>{
    return agent
    .post('/api/dog')
      .send(dogError).expect(500)
      .catch(()=>{ })
   })
   it('add Dog2 and return dog2 weigth',()=>{
    return agent
    .post('/api/dog')
      .send(dog2)
      .then(e => expect(e.body.height).equal('10 - 20'))
   })
   it('add Dog2 and return dog2 heigth correct',()=>{
    return agent
    .post('/api/dog')
      .send(dogmessy)
      .then(e => expect(e.body.weight).equal('5 - 15'))
   })
}).timeout(20000)