const editButtonHandler = async (event) => {
  event.preventDefault();

    const id = document.querySelector("#post-content").getAttribute("data-id");

    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const date = Date.now();

    if (content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content, date, id }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to edit post");
    }
  }
};

document
  .querySelector(".edit-form")
  .addEventListener("submit", editButtonHandler);
