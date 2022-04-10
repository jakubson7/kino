const bnwPage = document.querySelector("main.bnw");

bnwPage.addEventListener("click", () => {
  bnwPage.classList.add("bnw--active");
  bnwPage.addEventListener("click", () => {
    window.location.href = "./pages/soy-cuba-menu.html";
  });
});
