const imgLargeContainer = document.querySelector(".imgLargeContainer");
const imgLarge = document.querySelector(".imgLarge");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".gallery > img");
[...images].forEach(img => {
  img.addEventListener("click", e => {
    imgLarge.setAttribute(`src`, `${e.target.attributes.src.value}`);
    imgLargeContainer.classList.toggle("active");
    imgLarge.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  imgLargeContainer.classList.remove("active");
});

function changePicture(e) {
  const imgIndex = [...images].findIndex(img => {
    return img.attributes.src.value === imgLarge.attributes.src.value;
  });
  const action = e.target.parentNode.dataset.action;

  if (imgIndex >= 0 && imgIndex !== images.length - 1 && action === "next") {
    imgLarge.setAttribute(
      `src`,
      `${[...images][imgIndex + 1].attributes.src.value}`
    );
  } else if (imgIndex > 0 && action === "prev") {
    imgLarge.setAttribute(
      `src`,
      `${[...images][imgIndex - 1].attributes.src.value}`
    );
  } else if (imgIndex === 0 && action === "prev") {
    imgLarge.setAttribute(
      `src`,
      `${[...images][images.length - 1].attributes.src.value}`
    );
  } else {
    imgLarge.setAttribute(`src`, `${[...images][0].attributes.src.value}`);
  }
  imgLarge.classList.remove("active");
  setTimeout(() => {
    imgLarge.classList.add("active");
  }, 50);
}
[...document.querySelectorAll(".imgChange")].forEach(btn => {
  btn.addEventListener("click", changePicture);
});
