let time = 0;
setInterval(function () {
  time++;
  console.log(`${time} seconds`);
  if (time >= 30) {
    logout();
  }
}, 1000);

const resetTimer = () => {
  time = 0;
};

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
