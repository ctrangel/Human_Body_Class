

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



