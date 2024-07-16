document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.member');

    document.querySelectorAll('.info-button').forEach(button => {
        const member = button.closest('.member');

        // Mouse enter event to show info
        button.addEventListener('mouseenter', function() {
            // Show info for this member
            member.classList.add('active');
            // Blur all other members
            members.forEach(m => {
                if (m !== member) {
                    m.classList.add('blurred');
                }
            });
        });

        // Mouse leave event to hide info
        button.addEventListener('mouseleave', function() {
            // Check if mouse is over info, don't hide yet
            if (!member.querySelector('.info:hover')) {
                member.classList.remove('active');
                // Remove blur from all members
                members.forEach(m => {
                    m.classList.remove('blurred');
                });
            }
        });
        
        // Keep the info active if hovering over the info itself
        const info = member.querySelector('.info');
        info.addEventListener('mouseenter', function() {
            member.classList.add('active'); // Keep active while hovering over info
        });

        info.addEventListener('mouseleave', function() {
            member.classList.remove('active'); // Remove active when leaving info
            members.forEach(m => {
                m.classList.remove('blurred');
            });
        });
    });
    const swiperContainer = document.querySelector('.mySwiper-1');
    const swiperInstance = swiperContainer.swiper;

    document.getElementById('nextBtn').addEventListener('click', function() {
        if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
            swiperInstance.slideTo(0); // Go to the first slide
        } else {
            swiperInstance.slideNext(); // Go to the next slide
        }
    });
    
});
 