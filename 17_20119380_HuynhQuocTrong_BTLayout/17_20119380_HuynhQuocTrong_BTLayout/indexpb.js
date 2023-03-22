// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
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

firebase.database().ref("/TT_IoT/nhietdo").on("value", function (snapshot) {
	var nd = snapshot.val() + "℃";
	document.getElementById("nhietdo").innerHTML = nd;
	console.log(nd);
  });
  firebase.database().ref("/TT_IoT/doam").on("value", function (snapshot) {
	var da = snapshot.val() + "%";
	document.getElementById("doam").innerHTML = da;
	console.log(da);
  });

// var da = document.getElementById('doam');
// 	da.innerHTML = '<strong> 60%</strong>';
// 	console.log(da);
// 	console.log(da.innerHTML);

// var nd = document.getElementById('nhietdo');
// 	nd.innerHTML = '<strong> 36℃</strong>';
// 	console.log(nd);
// 	console.log(nd.innerHTML);

// var kg = document.getElementById('khigas');
// 	kg.innerHTML = '<strong> 1</strong>';
// 	console.log(kg);
// 	console.log(kg.innerHTML);

// var as = document.getElementById('anhsang');
// 	as.innerHTML = '<strong> 70%</strong>';
// 	console.log(as);
// 	console.log(as.innerHTML);

// function on1() {
// 	btn1.style.left = '0'
// 	document.getElementById("img1").src = "light_bulb_on.png"
// }

// function off1() {
// 	btn1.style.left = '110px'
// 	document.getElementById("img1").src = "light_bulb_off.png"
// }

function on2() {
	btn2.style.left = '0'
	document.getElementById("img2").src = "light_bulb_on.png"
}

function off2() {
	btn2.style.left = '110px'
	document.getElementById("img2").src = "light_bulb_off.png"
}

function on3() {
	btn3.style.left = '0'
	document.getElementById("img3").src = "light_bulb_on.png"
}

function off3() {
	btn3.style.left = '110px'
	document.getElementById("img3").src = "light_bulb_off.png"
}

function on4() {
	btn4.style.left = '0'
	document.getElementById("img4").src = "light_bulb_on.png"
}

function off4() {
	btn4.style.left = '110px'
	document.getElementById("img4").src = "light_bulb_off.png"
}

function on5() {
	btn5.style.left = '0'
	document.getElementById("img5").src = "img/quat_on.jpg"
}

function off5() {
	btn5.style.left = '110px'
	document.getElementById("img5").src = "img/quat_off.jpg"
}

function on6() {
	btn6.style.left = '0'
	document.getElementById("img6").src = "img/quat_on.jpg"
}

function off6() {
	btn6.style.left = '110px'
	document.getElementById("img6").src = "img/quat_off.jpg"
}
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