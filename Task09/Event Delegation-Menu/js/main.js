// 🕰️ Task09 : Event Delegation - Menu

const menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".home-link")) {
    alert("you click the home page ");
  }

  if (target.matches(".about-link")) {
    alert("you click the about page ");
  }
  if (target.matches(".contact-link")) {
    alert("you click the contact page ");
  }
  if (target.matches(".more-btn")) {
    alert("you click the button of more ");
  }
});
