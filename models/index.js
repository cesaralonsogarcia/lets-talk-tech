// Import models
const Post = require('./Post');
const Comment = require('./Comment');

// Create associations
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { Post, Comment };