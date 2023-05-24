const addCommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();

  if (content) {
    const response = await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
      document.location.replace(`/posts/${responseData.post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentFormHandler);
