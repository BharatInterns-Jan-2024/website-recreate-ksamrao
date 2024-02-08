function highlightTab(tabElement)
 {
    // Remove 'active' class from all tabs
    var allTabs = document.querySelectorAll('.top .div ');
    allTabs.forEach(function (tab) { 
        tab.classList.remove('active');
    });
    // Add 'active' class to the clicked tab
    tabElement.classList.add('active');
        }
function highlightGearIcon(gearIcon) {
    // Remove 'active' class from all tabs
    var allTabs = document.querySelectorAll('.top div');
    allTabs.forEach(function (tab) {
        tab.classList.remove('active');
    });
    // Remove 'active' class from the gear icon
    gearIcon.classList.remove('active');
}
