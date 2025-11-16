function changeBgColor() {
  let color = "#";
  const letters = "0123456789abcdef";

  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

  document.body.style.backgroundColor = color;
}
