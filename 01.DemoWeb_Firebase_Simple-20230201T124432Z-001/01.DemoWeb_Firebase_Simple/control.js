

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


// Auto load Temperature-------------------------
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

//Update Bulb status-----when reload website-------
// firebase.database().ref("/TT_IoT/BULB_01").get().then((snapshot) => {
//   if(snapshot.exists()){
//     console.log(snapshot.val())

//     var bulb_01_status = snapshot.val()
//     if (bulb_01_status.BULB_01 == "ON")
//       document.getElementById("d01_img").src = "./img/light_bulb_on.png"
//     else
//       document.getElementById("d01_img").src = "./img/light_bulb_off.png"
//   }
//   else
//     console.log("No data available!")
// })
firebase.database().ref("/TT_IoT/BULB_01").on("value", function (snapshot) {
  var led = snapshot.val();
  if (led == "ON") {
    document.getElementById("d01_img").src = "./img/light_bulb_on.png"
    document.getElementById("d01_on").style.background = '#00FF33';
  }
  else {
    document.getElementById("d01_img").src = "./img/light_bulb_off.png"
    document.getElementById("d01_on").style.background = '';
  }
});

//Den 01-------------------------------------------------------
var d01_on = document.getElementById("d01_on");
var d01_off = document.getElementById("d01_off");

d01_on.onclick = function () {
  console.log("On");
  document.getElementById("d01_img").src = "./img/light_bulb_on.png"
  document.getElementById("d01_on").style.background = '#00FF33';
  firebase.database().ref("/TT_IoT").update({
    "BULB_01": "ON"
  })
}

d01_off.onclick = function () {
  document.getElementById("d01_img").src = "./img/light_bulb_off.png"
  document.getElementById("d01_on").style.background = '';
  firebase.database().ref("/TT_IoT").update({
    "BULB_01": "OFF"
  })
}

