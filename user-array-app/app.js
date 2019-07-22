var faker = require('faker');
var users = [];

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();

while (users.length < 50) {
    users.push(randomName, randomEmail);
}
users.forEach((u, i) =>
    console.log(i + 1 + '.' + faker.fake("{{name.findName}}, {{internet.email}}")));