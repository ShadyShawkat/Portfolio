// document.querySelector('.anim-typewriter span:nth-child(1)').style.animationPlayState = 'paused'
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll('.anim-typewriter span').forEach( span => {
      // span.style.animationPlayState = 'paused';
      // span.style.border = 0;
    });
  }, 3500)
});
// console.log(document.querySelector('.anim-typewriter span:nth-child(1)'))