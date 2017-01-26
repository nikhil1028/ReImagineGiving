
function openNav() {
    document.getElementById("myNav").style.width = "100%";
	document.getElementById("exploreContent").style.opacity = "1";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
	document.getElementById("exploreContent").style.opacity = "0";
}

var modal = document.getElementById('myNav');

window.onclick = function(event) {
    if (event.target !== modal) {
        modal.style.width = "0";
    }
}

function myfunction1(){
	var div = document.getElementById('locationInput');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
}

function myfunction2() {
	var div = document.getElementById('fundingInput');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
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