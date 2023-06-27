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
})