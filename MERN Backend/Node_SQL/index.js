// require faker
const { faker } = require('@faker-js/faker');

// generate random id, username, email & password using faker package 
let getRandomUser = ()=> {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  };

  console.log(getRandomUser());