
var plus = Array.from(document.querySelectorAll(".plus-btn"));
var minus = document.querySelectorAll(".minus-btn");
console.log(minus);
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerText++;   
  });
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerText > 0) {
      minus[i].previousElementSibling.innerText--;
    }
  });
}

for (let i = 0; 1 < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
  if (hearts[i].style.color = "red") {
    hearts[i].style.color = "red";
  }else{
    hearts[i].style.color = "red";
  }
   })
}

