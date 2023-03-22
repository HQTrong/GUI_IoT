var firebaseConfig = {
  apiKey: "AIzaSyAbej4QoMiQVNXbDwzWAV9SO3uOOT6MjmQ",
  authDomain: "webesp32-420ac.firebaseapp.com",
  databaseURL: "https://webesp32-420ac-default-rtdb.firebaseio.com",
  projectId: "webesp32-420ac",
  storageBucket: "webesp32-420ac.appspot.com",
  messagingSenderId: "619024298914",
  appId: "1:619024298914:web:add1b112933ed1d09278fb",
  measurementId: "G-1NBQCF9G1P"
};
firebase.initializeApp(firebaseConfig);
firebase.database().ref("/nhietdo").on("value",function(snapshot){
var nd = snapshot.val();  
document.getElementById("nhietdo").innerHTML = nd;
console.log(nd);
});

firebase.database().ref("/Led1Status").on("value",function(snapshot){
  var led = snapshot.val();  
  if(led=="1")
  {
  on1();
}
  else
  {
  off1();
}
});

function off1() {
  var firebaseRef = firebase.database().ref().child("Led1Status");
   nut1.style.left = '0px';
   document.getElementById("light1").src = "dentat.png";
   toggle1.style.background = "rgb(204, 204, 204)";
   firebaseRef.set("0");

 }
function on1() {
  var firebaseRef = firebase.database().ref().child("Led1Status");
   nut1.style.left = '40px';
   document.getElementById("light1").src = "denbat.png";
   toggle1.style.background = "rgb(142, 244, 255)";
   firebaseRef.set("1");

 }
 function off2() {
    nut2.style.left = '0px';
    document.getElementById("light2").src = "dentat.png";
    toggle2.style.background = "rgb(204, 204, 204)";
  }
 function on2() {
    nut2.style.left = '40px';
    document.getElementById("light2").src = "denbat.png";
    toggle2.style.background = "rgb(142, 244, 255)";
  }
  function off3() {
    nut3.style.left = '0px';
    document.getElementById("light3").src = "dentat.png";
    toggle3.style.background = "rgb(204, 204, 204)";
  }
 function on3() {
    nut3.style.left = '40px';
    document.getElementById("light3").src = "denbat.png";
    toggle3.style.background = "rgb(142, 244, 255)";
  }
  function off4() {
    nut4.style.left = '0px';
    document.getElementById("light4").src = "dentat.png";
    toggle4.style.background = "rgb(204, 204, 204)";
  }
 function on4() {
    nut4.style.left = '40px';
    document.getElementById("light4").src = "denbat.png";
    toggle4.style.background = "rgb(142, 244, 255)";
  }
  function off5() {
    nut5.style.left = '0px';
    document.getElementById("light5").src = "dentat.png";
    toggle5.style.background = "rgb(204, 204, 204)";
  }
 function on5() {
    nut5.style.left = '40px';
    document.getElementById("light5").src = "denbat.png";
    toggle5.style.background = "rgb(142, 244, 255)";
  }
  function off6() {
    nut6.style.left = '0px';
    document.getElementById("light6").src = "dentat.png";
    toggle6.style.background = "rgb(204, 204, 204)";
  }
 function on6() {
    nut6.style.left = '40px';
    document.getElementById("light6").src = "denbat.png";
    toggle6.style.background = "rgb(142, 244, 255)";
  }
