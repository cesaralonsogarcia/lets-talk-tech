module.exports = {
    format_date: (date) => {
      const dateFormat = new Date(date);
      const day = dateFormat.getDate();
      const month = dateFormat.getMonth();
      const year = dateFormat.getFullYear();
      return `${day}/${month}/${year}`;
    },
    is_owner: (postUser, loggedInUser) => {
      return postUser === loggedInUser;
    }
  };
  