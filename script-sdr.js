sessionStorage.setItem("play","no");
var audio = document.getElementById("cntq");
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
else if(countDownDate.getDay()==6 && countDownDate.getHours()>19){
	countDownDate.setHours(20);
	countDownDate.setMinutes(14);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
}
var x = setInterval(function() {
  var audio = document.getElementById("cntq");
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if (seconds < 10 ? document.getElementById("message").innerHTML = "La r&eacuteunion commence dans " + minutes + " mn 0" + seconds + " s" 
                   : document.getElementById("message").innerHTML = "La r&eacuteunion commence dans " + minutes + " mn " + seconds + " s");
  
  //document.getElementById("message").innerHTML = "La réunion commence dans " + minutes + " mn " + seconds + " s ";
    
  /*if (distance <= 5000) {//fermeture à 5 sec
    var customWindow = window.open('', '_blank', '');
    customWindow.close(); 
  }*/
  if (distance <= 60000 && seconds == 10) {//goes.ogg à 10 sec
	//audio.pause();
	var bip = new Audio('https://nathanael-bonamie.github.io/goes.ogg');
	bip.play();
  }
  else if (distance <= 60000 && seconds == 20) {//fadeout à 15 sec
	var y = setInterval(function () {
		var audio = document.getElementById("cntq");
		audio.volume -= 0.01;
    		}, 150);
  }
  else if (distance <= 115000 && sessionStorage.getItem("play")=='no'){//cantique à 1m50s
	audio.volume = 0.5;
	audio.play();
	sessionStorage.setItem("play","yes");
  }
  else if (minutes == 0 && seconds == 0){
  	clearInterval(x);
  }
  else if (audio.volume < 0.03){
  	clearInterval(y);
	audio.pause();
  	}
}, 1000);
