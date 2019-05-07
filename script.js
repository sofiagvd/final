window.onload = function(){
    //this function will run after the page has finished loading.
    console.log("Page has loaded.")
}


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


  $(document).ready(function(){
    $('.carousel').carousel();
  });

  
