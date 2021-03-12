sessionStorage.setItem("play","no");
var countDownDate = new Date();
if (countDownDate.getDay()==2 && countDownDate.getHours()==19){
	countDownDate.setHours(19);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if(countDownDate.getDay()==6 && countDownDate.getHours()==16){
	countDownDate.setHours(16);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
}
else if(countDownDate.getDay()==5 && countDownDate.getHours()==22){
	countDownDate.setHours(22);
	countDownDate.setMinutes(08);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
}
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var audio = document.getElementById("cntq");
  
  document.getElementById("message").innerHTML = "La réunion commence dans " + minutes + "m " + seconds + "s ";
    
  if (distance <= 5000) {//fermeture à 5 sec
    window.close();
  }
  else if (distance <= 60000 && seconds == 10) {//goes.ogg à 10 sec
	audio.pause();
	var bip = new Audio('c:/Users/Salle du Royaume/Downloads/goes.ogg');
	bip.play();
  }
  else if (distance <= 60000 && seconds == 15) {//fadeout à 15 sec
	fadeOutEffect();
  }
  else if (distance <= 115000 && sessionStorage.getItem("play")=='no'){//cantique à 1m50s
	audio.volume=0.6;
	audio.play();
	sessionStorage.setItem("play","yes");
  }
}, 1000);

function fadeOutEffect() {
    setInterval(function () {
		var audio = document.getElementById("cntq");
		audio.volume-=0.01;
    }, 100);
	}
