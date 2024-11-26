const slideNumDiv = document.querySelector(".image .slide-number");
const imageList = Array.from(document.querySelectorAll(".image img"));
const previousBtn = document.querySelector(".navigation .previous");
const nextBtn = document.querySelector(".navigation .next");
const navigationNumList = Array.from(
  document.querySelectorAll(".navigation a"),
);
const imagesCount = imageList.length;

nextBtn.addEventListener("click", function () {
  if (!imageList[imagesCount - 1].classList.contains("active")) {
    activeIndex = imageList.indexOf(document.querySelector(".image .active"));
    imageList[activeIndex].classList.remove("active");
    imageList[activeIndex + 1].classList.add("active");
    navigationNumList[activeIndex].classList.remove("active");
    navigationNumList[activeIndex + 1].classList.add("active");
    slideNumDiv.textContent = `Slide #${activeIndex + 2} of ${imagesCount}`;
    if (activeIndex === imagesCount - 2) nextBtn.classList.add("inactive");
    else if (activeIndex === 0) previousBtn.classList.remove("inactive");
  }
});

previousBtn.addEventListener("click", function () {
  if (!imageList[0].classList.contains("active")) {
    activeIndex = imageList.indexOf(document.querySelector(".image .active"));
    imageList[activeIndex].classList.remove("active");
    imageList[activeIndex - 1].classList.add("active");
    navigationNumList[activeIndex].classList.remove("active");
    navigationNumList[activeIndex - 1].classList.add("active");
    slideNumDiv.textContent = `Slide #${activeIndex} of ${imagesCount}`;
    if (activeIndex === 1) previousBtn.classList.add("inactive");
    else if (activeIndex === imagesCount - 1)
      nextBtn.classList.remove("inactive");
  }
});

navigationNumList.forEach(function (navNum, index) {
  navNum.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active")) {
      document.querySelector(".navigation .active").classList.remove("active");
      navNum.classList.add("active");
      document.querySelector(".image .active").classList.remove("active");
      imageList[index].classList.add("active");
      slideNumDiv.textContent = `Slide #${index + 1} of ${imagesCount}`;
      if (index === 0) {
        previousBtn.classList.add("inactive");
        nextBtn.classList.remove("inactive");
      } else if (index === imagesCount - 1) {
        nextBtn.classList.add("inactive");
        previousBtn.classList.remove("inactive");
      } else {
        previousBtn.classList.remove("inactive");
        nextBtn.classList.remove("inactive");
      }
    }
  });
});
