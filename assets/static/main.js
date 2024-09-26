const a_tag = document.querySelectorAll(".open-new-window");

a_tag.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(e.getAttribute("href"), "_blank");
  });
});
