

setInterval(() => {
  var screenWidth = window.innerWidth;
  var prevScrollpos = window.pageYOffset;
  console.log(screenWidth);
  

  if (screenWidth >= 1024) {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
      } else {
        document.querySelector("nav").style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
  else if(screenWidth >= 768){
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
      } else {
        document.querySelector("nav").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
  }else {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
      } else {
        document.querySelector("nav").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
}, 1000);