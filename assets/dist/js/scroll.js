document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.wellbeing-box');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  });
  