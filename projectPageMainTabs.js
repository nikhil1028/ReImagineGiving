function openProjectMainTabs(evt, tabName) {
    var i, mainTabContent, mainTabLinks;
    mainTabContent = document.getElementsByClassName("mainTabContent");
    for (i = 0; i < mainTabContent.length; i++) {
        mainTabContent[i].style.display = "none";
		mainTabContent[i].style.width = "0";
    }
    mainTabLinks = document.getElementsByClassName("mainTabLinks");
    for (i = 0; i < mainTabLinks.length; i++) {
        mainTabLinks[i].className = mainTabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName).style.width = "100%";
    evt.currentTarget.className += " active";
}

function openProjectDonationOptionsTabs(evt, tabName) {
    var i, donationOptionsTabContent, donationOptionsTabLinks;
    donationOptionsTabContent = document.getElementsByClassName("donationOptionsTabContent");
    for (i = 0; i < donationOptionsTabContent.length; i++) {
        donationOptionsTabContent[i].style.display = "none";
    }
    donationOptionsTabLinks = document.getElementsByClassName("donationOptionsTabLinks");
    for (i = 0; i < donationOptionsTabLinks.length; i++) {
        donationOptionsTabLinks[i].className = donationOptionsTabLinks[i].className.replace(" donationOptionActive", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " donationOptionActive";
}