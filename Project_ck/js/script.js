

const firebaseConfig = {
	apiKey: "AIzaSyB_pWBIVF6M1bX1VpbwjTB2bnKdFdw19gw",
	authDomain: "tt-iot-da7d0.firebaseapp.com",
	databaseURL: "https://tt-iot-da7d0-default-rtdb.firebaseio.com",
	projectId: "tt-iot-da7d0",
	storageBucket: "tt-iot-da7d0.appspot.com",
	messagingSenderId: "972705039917",
	appId: "1:972705039917:web:06327588e72884b5465aa4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");
let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");
let progressStartValue1 = 0,    
    speed1 = 10;
let progressStartValue2 = 0,    
    speed2 = 10;
   

  firebase.database().ref("/TT_IoT/nhietdo").on("value", function (snapshot) {
    var nd = snapshot.val();
    document.getElementById("nhietdo");
    console.log(nd);
    progressEndValue2=nd;
    console.log(progressStartValue2);
    if(progressEndValue2>progressStartValue2)
    {
        let progress2 = setInterval(() => {
            progressStartValue2++;
        
            progressValue2.textContent = `${progressStartValue2}°C`
            circularProgress2.style.background = `conic-gradient(#FF0000 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
            if(progressStartValue2 == progressEndValue2){
                clearInterval(progress2);
            }    
        }, speed2);
    }else{
        let progress2 = setInterval(() => {
            progressStartValue2--;
        
            progressValue2.textContent = `${progressStartValue2}°C`
            circularProgress2.style.background = `conic-gradient(#FF0000 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
            if(progressStartValue2 == progressEndValue2){
                clearInterval(progress2);
            }    
        }, speed2);
    }
    
    

  });
  firebase.database().ref("/TT_IoT/doam").on("value", function (snapshot) {
    let da = snapshot.val();
    document.getElementById("doam");
    console.log(da);
    progressEndValue1=da;
    if(progressEndValue1>progressStartValue1)
    {
        let progress1 = setInterval(() => {
            progressStartValue1++;
        
            progressValue1.textContent = `${progressStartValue1}%`
            circularProgress1.style.background = `conic-gradient(#0000FF ${progressStartValue1 * 3.6}deg, #ededed 0deg)`
            if(progressStartValue1 == progressEndValue1){
                clearInterval(progress1);
            }    
        }, speed1);
    }
    else{
        let progress1 = setInterval(() => {
            progressStartValue1--;
        
            progressValue1.textContent = `${progressStartValue1}%`
            circularProgress1.style.background = `conic-gradient(#0000FF ${progressStartValue1 * 3.6}deg, #ededed 0deg)`
            if(progressStartValue1 == progressEndValue1){
                clearInterval(progress1);
            }    
        }, speed1);
    }
      
   
  });
firebase.database().ref("/TT_IoT/BULB_01").on("value", function (snapshot) {
	var led = snapshot.val();
	if (led == "ON") {
	  document.getElementById("img1").src = "./img/light_bulb_on.png"
	  btn1.style.left="0px";
	}
	else {
	  document.getElementById("img1").src = "./img/light_bulb_off.png"
	  btn1.style.left = '110px'
	}
  });
  firebase.database().ref("/TT_IoT/BULB_02").on("value", function (snapshot) {
	var led = snapshot.val();
	if (led == "ON") {
	  document.getElementById("img2").src = "./img/light_bulb_on.png"
	  btn2.style.left="0px";
	}
	else {
	  document.getElementById("img2").src = "./img/light_bulb_off.png"
	  btn2.style.left = '110px'
	}
  });
d1_on.onclick = function () {
 
    btn1.style.left="0px";
    document.getElementById("img1").src = "./img/light_bulb_on.png"
    firebase.database().ref("/TT_IoT").update({
      "BULB_01": "ON"
    })
  }
  
  d1_off.onclick = function () {
    btn1.style.left = '110px'
    document.getElementById("img1").src = "./img/light_bulb_off.png"
    firebase.database().ref("/TT_IoT").update({
      "BULB_01": "OFF"
    })
  }

  d2_on.onclick = function () {
 
    btn2.style.left="0px";
    document.getElementById("img2").src = "./img/light_bulb_on.png"
    firebase.database().ref("/TT_IoT").update({
      "BULB_02": "ON"
    })
  }
  
  d2_off.onclick = function () {
    btn2.style.left = '110px'
    document.getElementById("img2").src = "./img/light_bulb_off.png"
    firebase.database().ref("/TT_IoT").update({
      "BULB_02": "OFF"
    })
  }

