let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY >0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  document.addEventListener("DOMContentLoaded", function() {
    const watchNowButtons = document.querySelectorAll('.bttn');
  
  
    function watchNowHandler(event) {
        event.preventDefault();
  
        const isSubscribed = false; 
  
        if (!isSubscribed) {
            alert("You are not subscribed! Please subscribe to watch.");
        } else {
            window.location.href = this.getAttribute("href");
        }
    }
  
    watchNowButtons.forEach(button => {
        button.addEventListener("click", watchNowHandler);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.querySelector('.bn');
    const wrappingPart = document.querySelector('.wrapping');
  
    subscribeButton.addEventListener('click', function(event) {
        event.preventDefault();
        wrappingPart.classList.toggle('hide');
    });
  
  
  });
  
  
