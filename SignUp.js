function openSignUpOverlay() {
    document.getElementById("SignUp").style.width = "100%";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
	document.getElementById("SignUpForms").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the explore */
function closeSignUpOverlay() {
	document.getElementById("SignUp").style.width = "0%";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

window.onclick = function(event) {
    if (!event.target.matches('.SignUpSpan')) {
        document.getElementById("SignUp").style.width = "0%";
		document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }
}

function SignMeUp() {
    document.getElementById("SignUp").style.width = "0%";
	document.getElementById("LogIn").style.width = "0%";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
	document.getElementById("Profile").style.display = "inline-block";
	document.getElementById("registrationDiv").style.display = "none";
	document.getElementById("LogInOverlay").style.display = "none";
}

function logout() {
	document.getElementById("registrationDiv").style.display = "inline-block";
	document.getElementById("Profile").style.display = "none";
}

function openSignUpForms(evt, registrationType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(registrationType).style.display = "block";
    evt.currentTarget.className += " active";
}



function openLogInOverlay() {
	document.getElementById("LogIn").style.width = "100%";
    document.getElementById("LogInOverlay").style.display = "block";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the explore */
function closeLogInOverlay() {
	document.getElementById("LogIn").style.width = "0%";
	document.getElementById("LogInOverlay").style.display = "none";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}
