const editButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const date = Date.now();

    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content, date }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".edit-post-btn")
  .addEventListener("click", editButtonHandler);
