const { Post } = require('../models');

const postdata = [
    {
        "title": "Sequelize",
        "content": "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.",
        "date": "03/24/2022",
        "user_id": "1"
    },
    {
        "title": "Express",
        "content": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        "date": "01/05/2021",
        "user_id": "2"
    },
    {
        "title": "Node.js",
        "content": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        "date": "12/25/2020",
        "user_id": "3"
    },
    {
        "title": "React",
        "content": "React is an open-source front-end JavaScript library for building user interfaces or UI components.",
        "date": "11/15/2020",
        "user_id": "4"
    },
    {
        "title": "Angular",
        "content": "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
        "date": "10/05/2020",
        "user_id": "5"
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;