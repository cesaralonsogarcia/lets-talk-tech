const addCommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();

  await fetch("/api/comment/", {
    method: "POST",
    body: JSON.stringify({ content }),
    headers: { "Content-Type": "application/json" },
  });
  
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentFormHandler);
