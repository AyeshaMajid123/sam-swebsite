   
    var width = screen.width;
    console.log(width);
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.getElementById("intro_image1").style.width='70%';
            document.getElementById("intro_image2").style.width='70%';
            document.getElementById("intro_image3").style.display="none";
          console.log("Screen width is at least 500px")
        } else {
          console.log("Screen less than 500px")
        }
      })