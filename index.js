window.onload = function () {
  const captcha = document.getElementById("captcha");
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmCaptcha = document.getElementById("confirmCaptcha");
  const btn = document.getElementById("btn");
  const btn2 = document.getElementById("btn2");
  const main = document.getElementById("main");

  let strOne = "qwertyuiopasdfghjkzxcvbnmLKJHGFDSAZXCVBNMPOIUYTREWQ6789054321";

  let strTwo = "";

  for (let i = 1; i <= 6; i++) {
    strTwo += strOne.charAt(Math.random() * strOne.length);
  }

  captcha.innerText = strTwo;

  function signUp() {
    if (
      name.value.length > 0 &&
      email.value.length > 0 &&
      password.value == confirmPassword.value &&
      captcha.innerText == confirmCaptcha.value
    ) {
      alert("your sign-up completed");
      location.href = index.html;
    } else {
      alert("check details");
    }
  }

  function darkMode(e) {
    e.target.parentNode.style.backgroundColor = "black";
    captcha.style.color = "white";
  }
  function lightMode(e) {
    e.target.parentNode.style.backgroundColor = "white";
    captcha.style.color = "black";
  }

  form.addEventListener("submit", signUp);
  btn.addEventListener("click", darkMode);
  btn2.addEventListener("click", lightMode);
};
