const serial = document.querySelector(".serial");
const generateBtn = document.querySelector("button");

const serialLen = 10;
const charSet =
  "1234567890-+!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

generateBtn.addEventListener("click", function () {
  serial.textContent = "";
  for (let i = 0; i < serialLen; i++) {
    serial.textContent =
      serial.textContent + charSet[Math.floor(Math.random() * charSet.length)];
  }
});
