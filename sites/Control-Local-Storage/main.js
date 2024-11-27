const input = document.querySelector("input");
const checkBtn = document.querySelector(".check");
const addBtn = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");
const showBtn = document.querySelector(".show");
const results = document.querySelector(".results");

checkBtn.addEventListener("click", function () {
  const item = input.value;
  if (item.length !== 0) {
    if (window.localStorage.getItem(item) !== null)
      results.innerHTML = `Found Local Storage Item Called <span>${item}</span>`;
    else
      results.innerHTML = `No Local Storage Item With The Name <span>${item}</span>`;
  }
});

addBtn.addEventListener("click", function () {
  const item = input.value;
  if (item.length !== 0) {
    window.localStorage.setItem(item, item);
    results.innerHTML = `Local Storage Item <span>${item}</span> Added`;
  }
});

deleteBtn.addEventListener("click", function () {
  const item = input.value;
  if (item.length !== 0) {
    if (window.localStorage.getItem(item) !== null) {
      window.localStorage.removeItem(item);
      results.innerHTML = `Local Storage Item <span>${item}</span> Deleted`;
    } else
      results.innerHTML = `No Local Storage Item With The Name <span>${item}</span>`;
  }
});

showBtn.addEventListener("click", function () {
  const items = Object.keys(window.localStorage);
  if (items.length === 0) results.innerHTML = "Local Storage Is Empty";
  else results.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const p = document.createElement("p");
    p.textContent = items[i];
    results.appendChild(p);
  }
});
