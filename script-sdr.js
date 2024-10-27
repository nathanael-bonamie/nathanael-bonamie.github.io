sessionStorage.setItem("play","no");

alert("Clique sur \"commence\" pour afficher l'horloge sur le deuxième écran puis valide le popup : \"Écran 2 disponible.\"");

var countDownDate = new Date();

if (localStorage.cntq){
	var audio = new Audio(localStorage.getItem('cntq'));
}
//var bip = new Audio('https://nathanael-bonamie.github.io/goes.ogg');
var regVol=0.3;

if (countDownDate.getDay()==2 && countDownDate.getHours()==19 && countDownDate.getMinutes()<30){//mardi soir 19h30
	countDownDate.setHours(19);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if (countDownDate.getDay()==3 && countDownDate.getHours()==19 && countDownDate.getMinutes()<30){//mercredi soir 19h30
	countDownDate.setHours(19);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if (countDownDate.getDay()==4 && countDownDate.getHours()==19 && countDownDate.getMinutes()<30){//jeudi soir 19h30
	countDownDate.setHours(19);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if(countDownDate.getDay()==6 && countDownDate.getHours()==15 && countDownDate.getMinutes()<=59 && countDownDate.getMinutes()>=30){//samedi aprèm 16h00
	countDownDate.setHours(16);
	countDownDate.setMinutes(00);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if(countDownDate.getDay()==6 && countDownDate.getHours()==18 && countDownDate.getMinutes()<30){//samedi aprèm 18h30
	countDownDate.setHours(16);
	countDownDate.setMinutes(00);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else if(countDownDate.getDay()==6 && countDownDate.getHours()==09 && countDownDate.getMinutes()<30){//samedi matin 09h30
	countDownDate.setHours(09);
	countDownDate.setMinutes(30);
	countDownDate.setSeconds(00);
	countDownDate=countDownDate.getTime();
	}
else {
	countDownDate.setHours(countDownDate.getHours());//pour essais
        countDownDate.setMinutes(countDownDate.getMinutes()+2);
	countDownDate.setSeconds(countDownDate.getSeconds()+10);
	}
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if (seconds < 10 ? document.getElementById("message").innerHTML = "La réunion commence dans " + minutes + " mn 0" + seconds + " s" 
                   : document.getElementById("message").innerHTML = "La réunion commence dans " + minutes + " mn " + seconds + " s");//r&eacuteunion
  
  /*if (distance <= 60000 && seconds == 10) {//goes.ogg à 10 sec
	bip.volume=0.2;
	bip.play();
  }*/
  if (distance <= 60000 && seconds == 15 && localStorage.cntq) {//fadeout à 15 sec
	var y = setInterval(function () {
		if(regVol>0.01){
			regVol-=0.01;
			audio.volume = regVol.toFixed(2);
			//console.log(audio.volume);
			}
		else{
			clearInterval(y);
			audio.pause();
			localStorage.clear();
			}
    		}, 300);
  }
  if (distance <= 115000 && sessionStorage.getItem("play")=='no' && localStorage.cntq){//cantique à 1m55
	audio.volume=0.3;
	audio.play();
	sessionStorage.setItem("play","yes");
  }
  if (minutes <= 0 && seconds <= 0){//arret du décompte
  	clearInterval(x);
  }
}, 1000);
