function openSignUpOverlay() {
    document.getElementById("SignUp").style.height = "100%";
	document.getElementById("SignUpForms").style.opacity = "1";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
	document.getElementById("SignUpForms").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the explore */
function closeSignUpOverlay() {
	document.getElementById("SignUp").style.height = "0%";
	document.getElementById("SignUpForms").style.opacity = "0";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

function openLogInOverlay() {
	document.getElementById("LogIn").style.height = "100%";
	document.getElementById("LogInForms").style.opacity = "1";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the explore */
function closeLogInOverlay() {
	document.getElementById("LogIn").style.height = "0%";
	document.getElementById("LogInForms").style.opacity = "0";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

window.onclick = function(event) {
    if (event.target.matches('.translucentContainer')) {
        document.getElementById("SignUp").style.height = "0%";
		document.getElementById("LogIn").style.height = "0%";
		document.getElementById("SignUpForms").style.opacity = "0";
		document.getElementById("LogInForms").style.opacity = "0";
		document.getElementById("myNav").style.width = "0";
		document.getElementById("exploreContent").style.height = "";
		document.getElementById("exploreContent").style.opacity = "0";
		document.getElementById('exploreDiv').classList.toggle('exploreDiv');
		document.getElementById('ninja-btn').classList.toggle('active');
		document.getElementById('exploreButton').classList.toggle('exploreButtonActive');
		document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }
}

function SignMeUp() {
    document.getElementById("SignUp").style.height = "0%";
	document.getElementById("LogIn").style.height = "0%";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
	document.getElementById("Profile").style.display = "inline-block";
	document.getElementById("registrationDiv").style.display = "none";
	document.getElementById("LogInOverlay").style.display = "none";
}

function logout() {
	document.getElementById("registrationDiv").style.display = "inline-block";
	document.getElementById("Profile").style.display = "none";
}
