const addCommentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-content").value.trim();

//   const username = await fetch("/api/users/login", {
//     method: "GET",
//     body: JSON.stringify({ username }),
//     headers: { "Content-Type": "application/json" },
//   });
  const username = sessionStorage;
  console.log(comment);
  console.log(username);
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentFormHandler);