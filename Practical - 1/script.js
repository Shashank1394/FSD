const username = document.querySelector("#name");
const city = document.querySelector("#city");
const btn = document.querySelector("#greet-btn");

btn.addEventListener("click", () => {
  const message = document.querySelector("#text");
  message.textContent = `Welcome, ${username.value.trim()} from ${city.value.trim()}!`;
  username.value = "";
  city.value = "";
});
