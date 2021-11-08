window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".ddl-menu, .popup-menu a, .close-menu").forEach((el)=>   {
    el.addEventListener("click", (event) => {
      openMenu();
    });
  })
  

  function openMenu() {
    document.querySelector(".popup-menu").classList.toggle("open-menu");
  }
});
