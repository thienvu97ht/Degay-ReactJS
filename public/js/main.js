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

var string1 = "Học Javascript tại F8";
var string2 = "Javascrip";

console.log(string1.indexOf(string2));

function stringInString(needle, haystack) {
  var result =
    haystack.indexOf(needle) != -1 &&
    typeof needle == "string" &&
    typeof haystack == "string";
  console.log(result);
}

stringInString(string2, string1);
