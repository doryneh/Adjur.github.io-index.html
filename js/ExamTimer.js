function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.text(minutes + ":" + seconds);
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  jQuery(function ($) {
    var display = $(".countdown");
    startTimer(60, display);
  });



  /*
  ProgressBar
  */

  function startTimer(duration, display, progressBar) {
    var timer = duration, minutes, seconds;
    var width = 100;
  
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.text(minutes + ":" + seconds);
  
      // Update progress bar
      var remainingTime = timer / duration;
      var progressWidth = remainingTime * 100;
      progressBar.css("width", progressWidth + "%");
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  $(document).ready(function() {
    var display = $(".countdown");
    var progressBar = $(".progress-bar");
    startTimer(60, display, progressBar);
  });