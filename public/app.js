const btn = document.querySelector("#btn");
const input = document.querySelector("#email__input");
const error = document.querySelector(".p-active");
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", () => {
  let mail = input.value;
  if (emailReg.test(mail)) {
    error.classList.remove("error")
    error.classList.add("p-active")
  } else {
    error.classList.remove("p-active")
    error.classList.add("error")
  }
});
