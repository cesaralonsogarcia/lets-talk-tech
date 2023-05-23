const { Comment } = require('../models');

const commentdata = [
    {
        "content": "Great read! I really enjoyed it!",
        "date": "05/24/2022",
        "user_id": "2",
        "post_id": "1"
    },
    {
        "content": "I agree with you!",
        "date": "08/10/2022",
        "user_id": "3",
        "post_id": "1"
    },
    {
        "content": "Where can I get more info?",
        "date": "09/01/2022",
        "user_id": "1",
        "post_id": "2"
    },
    {
        "content": "Is this helpful?",
        "date": "09/02/2022",
        "user_id": "4",
        "post_id": "3"
    },
    {
        "content": "I don't understand this.",
        "date": "09/03/2022",
        "user_id": "5",
        "post_id": "4"
    },
    {
        "content": "I'm confused.",
        "date": "10/04/2022",
        "user_id": "1",
        "post_id": "5"
    },
    {
        "content": "Can you add the link?",
        "date": "09/16/2022",
        "user_id": "2",
        "post_id": "5"
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;