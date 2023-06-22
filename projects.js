document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  var imageCarousel = document.querySelectorAll(".image-carousel");
  console.log(imageCarousel.length);
  var currslide = new Array(imageCarousel.length).fill(0);
  var imagePrevButton = document.querySelectorAll(
    ".image-carousel-control.prev"
  );
  var imageNextButton = document.querySelectorAll(
    ".image-carousel-control.next"
  );

  function imageShowSlide(index, n) {
    var imageCarouselItems = document.querySelectorAll(
      `.image-carousel-${index} .image-carousel-item`
    );
    imageCarouselItems[currslide[index]].classList.remove("active");
    currslide[index] =
      (n + imageCarouselItems.length) % imageCarouselItems.length;
    imageCarouselItems[currslide[index]].classList.add("active");
  }

  function imageShowPrevSlide(index) {
    imageShowSlide(index, currslide[index] - 1);
  }

  function imageShowNextSlide(index) {
    imageShowSlide(index, currslide[index] + 1);
  }

  imagePrevButton.forEach((listItem) => {
    listItem.addEventListener("click", function (listItemt) {
      // Get the index of the clicked element
      var index;
      for (i = 0; i < imagePrevButton.length; i++) {
        if (imagePrevButton[i] == listItem) {
          index = i;
        }
      }
      imageShowPrevSlide(index);
      // Call your function and pass the index as a parameter
    });
  });
  imageNextButton.forEach((listItem) => {
    listItem.addEventListener("click", function (listItemt) {
      // Get the index of the clicked element
      var index;
      for (i = 0; i < imageNextButton.length; i++) {
        if (imageNextButton[i] == listItem) {
          index = i;
        }
      }
      imageShowNextSlide(index);
      // Call your function and pass the index as a parameter
    });
  });
});
