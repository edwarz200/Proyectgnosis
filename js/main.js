

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.carousel');
    var optionsCarousel = ({
      duration: 200,
      numVisible: 3,
    })
    var instancescarousel = M.Carousel.init(elems, optionsCarousel);
  
    // instance.set(3);

    var nav = document.querySelector('#nav')
    window.addEventListener('scroll',() =>{
      if (window.pageYOffset >= 57) {
        nav.style.background = "#061e57e7"
        nav.style.height = "65px"
      } 
      if (window.pageYOffset <= 56)  {
        nav.style.background = ""
        nav.style.height = ""        
      }
    })
  });
  $(".dropdown-trigger").dropdown();