document.addEventListener('DOMContentLoaded', function() {
    var welcomeElement = document.querySelector('.welcome');
    setTimeout(function() {
      welcomeElement.style.left = '0';
    }, 500);
  });

  function fadeIn(element) {
    element.classList.add('fade-in');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var fadeTextElements = document.querySelectorAll('.intro p');
    fadeTextElements.forEach(function(element) {
      fadeIn(element);
    });
  });

  var prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
  
    if (prevScrollPos > currentScrollPos) {
      document.querySelector('.nv').style.top = '0';
    } else {
      document.querySelector('.nv').style.top = '-100px';
    }
  
    prevScrollPos = currentScrollPos;
  });
