// Timer function to log out user after 15 minutes of inactivity
let time = 0;
setInterval(function () {
  time++;
  if (time >= 15 * 60) {
    logout();
  }
}, 1000);

// Reset timer on user activity
const resetTimer = () => {
  time = 0;
};

// Logout function
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);

document.addEventListener("click", resetTimer);
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
