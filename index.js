function playAudio() {
  var audio = document.getElementById("music");
  var speakerSlash = document.getElementsByClassName("ph-speaker-slash")[0];
  var speakerHigh = document.getElementsByClassName("ph-speaker-high")[0];

  if (!audio.paused && !audio.ended) {
    audio.pause();
    speakerSlash.style.display = "block";
    speakerHigh.style.display = "none";
  } else {
    audio.play();
    speakerSlash.style.display = "block";
    speakerHigh.style.display = "none";
  }
}

var modalContainer = document.getElementById("modalContainer");
var openModalBtn = document.getElementById("openModalBtn");
var youtuberInframe = document.getElementById("youtuberInframe");

openModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
    youtuberInframe.src = youtuberInframe.src;
  }
});
