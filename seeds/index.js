const sequelize = require("../config/connection");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedDatabase();
