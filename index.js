window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".ddl-menu").addEventListener("click", (event) => {
    openMenu();
  });

  function openMenu() {
    const headerElement = document.querySelector("header");
    headerElement.style.display === "block"
      ? (headerElement.style.display = "block")
      : (headerElement.style.display = "none");
    document.querySelector(".popup-menu").classList.toggle("open-menu");
  }
});
