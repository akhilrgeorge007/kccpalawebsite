function menudisplay(){
    if(window.getComputedStyle(document.getElementsByClassName('desktop-menu')[0]).display=='none'){
      document.getElementsByClassName('desktop-menu')[0].style.display = "flex"
    }
    else{
      document.getElementsByClassName('desktop-menu')[0].style.display = "none"
    }
  
  
  }
  const loader = document.getElementById("preloader")
  window.addEventListener("load",function(){
    window.scrollTo(0, 0);
    setTimeout(function(){
      loader.style.display="none";
      });
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animate');
          }
        });
      });
      observer.observe(this.document.querySelector(".row1"))
      observer.observe(this.document.querySelector(".row2"))
      observer.observe(this.document.querySelector(".row3"))
      observer.observe(this.document.querySelector(".row4"))
    })