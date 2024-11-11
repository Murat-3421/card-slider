const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets : true 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Responsive breakpoints
    breakpoints:{
        0:{
            slidesPrevView: 1
        },
        620:{
            slidesPrevView: 2
        },
        1024:{
            slidesPrevView: 3
        }
    }
  });