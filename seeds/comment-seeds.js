const { Comment } = require('../models');

const commentdata = [
    {
        "content": "Great read! I really enjoyed it!",
        "username": "johndoe",
        "date": "05/24/2022",
        "post_id": "1"
    },
    {
        "content": "I agree with you!",
        "username": "janedoe",
        "date": "08/10/2022",
        "post_id": "1"
    },
    {
        "content": "Where can I get more info?",
        "username": "dualipa",
        "date": "09/01/2022",
        "post_id": "2"
    },
    {
        "content": "Is this helpful?",
        "username": "taylorswift",
        "date": "09/02/2022",
        "post_id": "3"
    },
    {
        "content": "I don't understand this.",
        "username": "stephieharvel",
        "date": "09/03/2022",
        "post_id": "4"
    },
    {
        "content": "I'm confused.",
        "username": "stephieharvel",
        "date": "10/04/2022",
        "post_id": "5"
    },
    {
        "content": "Can you add the link?",
        "username": "jacobkearns",
        "date": "09/16/2022",
        "post_id": "5"
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;