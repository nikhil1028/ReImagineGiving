function openPaymentOptionTabs(evt, tabName) {
    var i, mainTabContent, mainTabLinks;
    mainTabContent = document.getElementsByClassName("paymentOptinoTabsContent");
    for (i = 0; i < mainTabContent.length; i++) {
        mainTabContent[i].style.display = "none";
		mainTabContent[i].style.width = "0";
    }
    mainTabLinks = document.getElementsByClassName("paymentOptionsLinks");
    for (i = 0; i < mainTabLinks.length; i++) {
        mainTabLinks[i].className = mainTabLinks[i].className.replace(" activePaymentOption", "");
    }
    document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName).style.width = "100%";
    evt.currentTarget.className += " activePaymentOption";
}