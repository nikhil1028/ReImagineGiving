function openUserPageLeftSideTabs(evt, tabName) {
    var i, mainTabContent, mainTabLinks;
    mainTabContent = document.getElementsByClassName("userPageLeftTabsContent");
    for (i = 0; i < mainTabContent.length; i++) {
        mainTabContent[i].style.display = "none";
		mainTabContent[i].style.width = "0";
    }
    mainTabLinks = document.getElementsByClassName("userPageLeftColumnOptionsLinks");
    for (i = 0; i < mainTabLinks.length; i++) {
        mainTabLinks[i].className = mainTabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName).style.width = "100%";
    evt.currentTarget.className += " active";
}


var $badges = $('.js-progress-badge')
  , $window = $(window)

  incrementBadge($badges)


function incrementBadge ($progressBadge) {

  var $badge = $progressBadge.find('.badge')
    , fillingFromEmpty = $badge.hasClass('badge--empty')

  $progressBadge.addClass('is-filling')

  if (fillingFromEmpty) {
    $progressBadge.addClass('is-filling-from-empty')
  }
}