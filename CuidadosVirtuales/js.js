function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.navbar').classList.remove('hidden');
    } else {
        document.querySelector('.navbar').classList.add('hidden');
    }
    prevScrollpos = currentScrollPos;
};


// Función con tiempo de variable
function hideNavbar(time) {
  setTimeout(function() {
      document.querySelector('.navbar').classList.add('hidden');
  }, time);
}

$(function() {
  $('.shape').addClass("shape-border");
  $('.svg-wrapper').click(function() {
    $('.shape').toggleClass('shape-border');
  });
});