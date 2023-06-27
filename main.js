function menudisplay(){
    if(window.getComputedStyle(document.getElementsByClassName('desktop-menu')[0]).display=='none'){
      document.getElementsByClassName('desktop-menu')[0].style.display = "flex"
    }
    else{
      document.getElementsByClassName('desktop-menu')[0].style.display = "none"
    }
  
  
  }

  const loader = document.getElementById("preloader")

  document.addEventListener('DOMContentLoaded', function() {

    window.scrollTo(0, 0);
  setTimeout(function(){
    loader.style.display="none";
    });
    var carouselItems = document.querySelectorAll('.carousel-item');
    var carouselItemsh1 = document.querySelectorAll('.carousel-item h1');
    var currentSlide = 0;
    var prevButton = document.querySelector('.carousel-control.prev');
    var nextButton = document.querySelector('.carousel-control.next');
  
    function showSlide(n) {
      carouselItems[currentSlide].classList.remove('active');
      carouselItemsh1[currentSlide].classList.remove('active');
      currentSlide = (n + carouselItems.length) % carouselItems.length;
      carouselItems[currentSlide].classList.add('active');
      carouselItemsh1[currentSlide].classList.remove('active');
    }

    var projectCarouselItems = document.querySelectorAll('.project-carousel-item');
    var imageCarousel = document.querySelectorAll('.image-carousel')
    var projectCurrentSlide = 0;
    var projectPrevButton = document.querySelector('.project-carousel-control.prev');
    var projectNextButton = document.querySelector('.project-carousel-control.next');

    function projectShowSlide(n) {
      imageCarousel[projectCurrentSlide].classList.remove('active')
      projectCarouselItems[projectCurrentSlide].classList.remove('active');
      projectCurrentSlide = (n + projectCarouselItems.length) % projectCarouselItems.length;
      imageCarousel[projectCurrentSlide].classList.add('active')
      projectCarouselItems[projectCurrentSlide].classList.add('active');
    }

    var imageCarouselItems = document.querySelectorAll('.image-carousel.active .image-carousel-item');
    var imageCurrentSlide = 0;
    var imagePrevButton = document.querySelectorAll('.image-carousel-control.prev');
    var imageNextButton = document.querySelectorAll('.image-carousel-control.next');

    
  
    function showPrevSlide() {
      showSlide(currentSlide - 1);
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function  projectShowPrevSlide() {
      imageShowSlide(0)
      projectShowSlide(projectCurrentSlide - 1);
      imageCarouselItems = document.querySelectorAll('.image-carousel.active .image-carousel-item');
      imageShowSlide(0)
      console.log(imageCarouselItems)
    }
  
    function projectShowNextSlide() {
      imageShowSlide(0)
      projectShowSlide(projectCurrentSlide + 1);
      imageCarouselItems = document.querySelectorAll('.image-carousel.active .image-carousel-item');
      imageShowSlide(0)
      console.log(imageCarouselItems)
    }

    function imageShowSlide(n){
      imageCarouselItems[imageCurrentSlide].classList.remove('active')
      imageCurrentSlide = (n+imageCarouselItems.length) % imageCarouselItems.length;
      imageCarouselItems[imageCurrentSlide].classList.add('active')
      console.log(imageCarouselItems)
    }

    function imageShowPrevSlide(){
      imageShowSlide(imageCurrentSlide - 1)
    }

    function imageShowNextSlide(){
      imageShowSlide(imageCurrentSlide + 1)
    }
  
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    projectPrevButton.addEventListener('click', projectShowPrevSlide);
    projectNextButton.addEventListener('click', projectShowNextSlide);

    for(let i=0;i<imagePrevButton.length;i++){
      imagePrevButton[i].addEventListener('click',imageShowPrevSlide);
      imageNextButton[i].addEventListener('click',imageShowNextSlide)
    }

    
  
  
    // Automatically advance slides every 3 seconds
    // setInterval(function() {
    //   showSlide(currentSlide + 1);
    // }, 4000);
  });