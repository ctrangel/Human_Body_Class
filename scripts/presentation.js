$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
    console.log("function called");
  });
});

var whiteAudio;
function whiteNoise() {
  let button = document.getElementById("white");

  if (!whiteAudio) {
    whiteAudio = new Audio("../media/white_noise.wav");
  }
  if (whiteAudio.paused) {
    whiteAudio.play();
    button.innerHTML = "II";
  } else {
    whiteAudio.pause();
    button.innerHTML = "▶";
  }
}

var pinkAudio;
function pinkNoise() {
  let button = document.getElementById("pink");

  if (!pinkAudio) {
    pinkAudio = new Audio("../media/pink_noise.wav");
  }
  if (pinkAudio.paused) {
    pinkAudio.play();
    button.innerHTML = "II";
  } else {
    pinkAudio.pause();
    button.innerHTML = "▶";
  }
}

var brownAudio;
function brownNoise() {
  let button = document.getElementById("brown");

  if (!brownAudio) {
    brownAudio = new Audio("../media/brown_noise.wav");
  }
  if (brownAudio.paused) {
    brownAudio.play();
    button.innerHTML = "II";
  } else {
    brownAudio.pause();
    button.innerHTML = "▶";
  }
}
