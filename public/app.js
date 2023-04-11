const btn = document.querySelector("#btn");
const input = document.querySelector("#email__input");
const error = document.querySelector(".p-active");
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// show message

const showSuccessMessage = () => {
  let message = document.createElement('div');
  message.classList.add("message")
  message.innerText = 'Thanks for subscribing!'
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
  }, 3000);
}


btn.addEventListener("click", () => {
  let mail = input.value;
  if (emailReg.test(mail)) {
    error.classList.remove("error")
    error.classList.add("p-active")
    showSuccessMessage();
  } else {
    error.classList.remove("p-active")
    error.classList.add("error")
  }
});

