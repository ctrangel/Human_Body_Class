

window.addEventListener("load", function () {
  var floatingDiv = document.getElementById("header");
  var position = -100;
  var intervalId = setInterval(frame, 10);
  function frame() {
    if (position == 0) {
      clearInterval(intervalId);
      setTimeout(function () {
        
      }, 2000);
    } else {
      position += 5;
      floatingDiv.style.bottom = position + "px";
    }
  }
});

function closeNotification() {
  var callout = document.getElementById("callout");
  callout.style.display = 'none';

}


$(document).ready(function() {
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;

    });
    console.log("function called");
  });
});