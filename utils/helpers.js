module.exports = {
  format_date: (date) => {
    const dateFormat = new Date(date);
    const day = dateFormat.getDate();
    const month = dateFormat.getMonth() + 1;
    const year = dateFormat.getFullYear();
    return `${month}/${day}/${year}`;
  },
  is_owner: (postUser, loggedInUser) => {
    return postUser === loggedInUser;
  },
};
