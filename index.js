function openMenu() {
  document.querySelector('.popup-menu').classList.toggle('open-menu');
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ddl-menu, .popup-menu a, .close-menu').forEach((el) => {
    el.addEventListener('click', () => {
      openMenu();
    });
  });
});
