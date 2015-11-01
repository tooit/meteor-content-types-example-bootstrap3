if(Books.find().count() < 25){
  _.each(_.range(25), function(){
    Books.insert({
      title: faker.hacker.phrase(),
      author: faker.name.findName(),
      summary: faker.lorem.sentence(),
      copies: faker.random.number()
    });
  });
}
