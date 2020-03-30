var cross = document.querySelector(".fi-xwluxl-times-wide");
var cross1 = document.querySelector("#cross");
var logIn = document.getElementById("log");
var signIn = document.getElementById("sign");
var plus = document.querySelectorAll("#qna");
var about = document.getElementsByClassName("about");
var area = document.querySelector(".area");
var menu = document.querySelector(".fi-xnsuxl-three-bars-solid");
//nav bar
menu.addEventListener("click", function(e) {
  var nav1 = document.querySelector(".top3");
  nav1.classList.toggle("dis");
});
//faq
function selectItem(e) {
  e.preventDefault();
  const showItem = document.querySelector(`#${this.className}-content`);
  showItem.classList.toggle("show");
}
plus.forEach(item => item.addEventListener("click", selectItem));
function login() {
  const show = document.querySelector(".login");
  show.style.display = "block";
  area.style.display = "none";
}
// modal window
function signedup() {
  const show = document.querySelector(".signin");
  show.style.display = "block";
  area.style.display = "none";
}
function close() {
  const show = document.querySelector(".login");
  show.style.display = "none";
  area.style.display = "block";
}
function closes() {
  const show = document.querySelector(".signin");
  show.style.display = "none";
  area.style.display = "block";
}
logIn.addEventListener("click", login);
cross.addEventListener("click", close);
signIn.addEventListener("click", signedup);
cross1.addEventListener("click", closes);
