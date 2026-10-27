const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "Don't go being all discombobulated today; you've got this handled.",
  "You're doing great. Please ignore the gobbledygook and keep shining.",
  "If cauliflower can become pizza, you can do absolutely anything.",
  "You better not forget how amazing you are, or I will remind you Personally.",
  "Remember, you are unique—just like everybody else",
  "you ask good questions. that is the whole skill.",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
}); 