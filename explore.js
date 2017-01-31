
function openNav() {
    document.getElementById("side-nav").style.width = "100%";
	document.getElementById("side-navForm").style.height = "25%";
	document.getElementById("side-navForm").style.opacity = "1";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
	document.getElementById("exploreContent").style.height = "0";
	document.getElementById("exploreContent").style.opacity = "0";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function toggleNav() {
    document.getElementById('side-nav').classList.toggle('navOpen');
    document.getElementById('side-navForm').classList.toggle('formOpen');
	document.getElementsByTagName("body")[0].classList.toggle = ('toggleOverflow');
}

function myfunction1(){
	var div = document.getElementById('locationInput');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function myfunction2() {
	var div = document.getElementById('fundingInput');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function myfunction3(){
	var div = document.getElementById('causeInput');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}