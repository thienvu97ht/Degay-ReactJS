var loginFormElm = document.querySelector("#loginForm");

if (loginFormElm) {
  loginFormElm.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

/* Redirect  */
function redirectAccount() {
  console.log("xxx");
  window.location.href = "account.html";
}
