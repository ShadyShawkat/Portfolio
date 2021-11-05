// document.querySelector('.anim-typewriter span:nth-child(1)').style.animationPlayState = 'paused'
document.addEventListener("DOMContentLoaded", () => {

  // Header animations
  const headingSpans = document.querySelectorAll('.anim-typewriter span');
  headingSpans[0].style.borderRight = '5px solid #ff6b00bf';

  setTimeout(() => {
      headingSpans[0].style.animationPlayState = 'paused';
      headingSpans[0].style.borderRight = 0;
      headingSpans[1].style.borderRight = '5px solid #ff6b00bf';
      
      setTimeout(() => {
      headingSpans[1].style.paddingRight = '10px';

      setTimeout(() => {
        headingSpans[1].style.borderRight = 0;
      }, 2000)
    }, 1250)

  }, 3500)

  // Projects section animations
  let options = {};
  let projects = document.querySelectorAll(".most-recent-project-desktop-img, .project-card, .about-me-text");
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        if(entry.target.classList.contains('about-me-text')) {
          document.querySelector('.about-section-header > h2').classList.add('fadeInRightAnimation');
          document.querySelector('.about-me-text').classList.add('fadeInUpAnimation');
        } else {
          entry.target.classList.add('scaleUpAnimations');
        }
      } 
      // else {
      //   entry.target.classList.remove('scaleUpAnimations');
      // }
    })
  }, options);

  projects.forEach((project) => observer.observe(project));
});
// console.log(document.querySelector('.anim-typewriter span:nth-child(1)'))