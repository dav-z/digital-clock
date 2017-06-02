// We are going to first set the clock to current time
// hours, minutes, seconds
//
// then, every second, we want to increase the time by second, and manage the minutes and hours...
//
//so... every time we have 60 seconds:
// seconds goes to 0, minutes goes up by 1
//
// every time we have 60 minutes:
// minutes goes to 0, hours goes up by 1
//
//every time we have 13/25 hours:
// reset hours to either 0/1
//
// Then: add in either hex clock, or custom greeting

var elHour
  , elMinute
  , elSecond
  , now = new Date()
  ;

document.addEventListener("DOMContentLoaded", function() {
  elHour = document.querySelector("#clock .hour");
  elMinute = document.querySelector("#clock .minute");
  elSecond = document.querySelector("#clock .second");

  elSecond.innerText = now.getSeconds();
  elMinute.innerText = now.getMinutes();
  elHour.innerText = now.getHours();

  setInterval(function(){
    var seconds = parseInt(elSecond.innerText) + 1;
    var minutes = parseInt(elMinute.innerText);
    var hours = parseInt(elHour.innerText);
    if( seconds < 10 ) {
      seconds = "0" + seconds;
    }
    if( minutes < 10 ) {
      minutes = "0" + minutes;
    }
    if( hours < 10 ) {
      hours = "0" + hours;
    }
    if( seconds >= 60 ) {
      seconds = 0;
      minutes = parseInt(elMinute.innerText) + 1;
    }
    if( minutes >= 60 ) {
      minutes = 0;
      hours = parseInt(elHour.innerText) + 1;
    }
    if( hours >= 24 ) {
      hours = 0;
    }
    console.log("hours", hours)
    if( hours < 7 && hours > 0 ) {
      document.getElementById('greeting').innerText = "Get Some Sleep While You Can, Ugly.";
      document.body.style.backgroundColor = "MidnightBlue";
    }
    else if( hours == 7 ) {
      document.getElementById('greeting').innerText = "Surf's Up, Bruh.";
      document.body.style.backgroundColor = "Aqua";
    }
    else if( hours < 19 && hours > 7 ) {
      document.getElementById('greeting').innerText = "The Sun's Out, I Guess.";
        document.body.style.backgroundColor = "DeepSkyBlue";
    }
    else {
      document.getElementById('greeting').innerText = "Get Some Sleep While You Can, Ugly.";
      document.body.style.backgroundColor = "MidnightBlue";
    }
    elSecond.innerText = seconds;
    elMinute.innerText = minutes;
    elHour.innerText = hours;
  },1000);
});
