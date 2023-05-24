const editPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${req.session.post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert("Failed to edit post");
      }
    }
  };
  
  document
    .querySelector(".post-form")
    .addEventListener("submit", editPostFormHandler);