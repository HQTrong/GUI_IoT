var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')


var da = document.getElementById('doam');
	da.innerHTML = '<strong> 60%</strong>';
	console.log(da);
	console.log(da.innerHTML);

var nd = document.getElementById('nhietdo');
	nd.innerHTML = '<strong> 26℃</strong>';
	console.log(nd);
	console.log(nd.innerHTML);

var kg = document.getElementById('khigas');
	kg.innerHTML = '<strong> 0</strong>';
	console.log(kg);
	console.log(kg.innerHTML);

var as = document.getElementById('anhsang');
	as.innerHTML = '<strong> 30%</strong>';
	console.log(as);
	console.log(as.innerHTML);

function on1() {
	btn1.style.left = '0'
	document.getElementById("img1").src = "light_bulb_on.png"
}

function off1() {
	btn1.style.left = '110px'
	document.getElementById("img1").src = "light_bulb_off.png"
}

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
	document.getElementById("img6").src = "img/tivi_on.jpg"
}

function off6() {
	btn6.style.left = '110px'
	document.getElementById("img6").src = "img/tivi_off.png"
}