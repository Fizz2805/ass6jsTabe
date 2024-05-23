function openTab(evt, tabName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
   tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    } 

    // Show the current tab content, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
    document.getElementById(tabName).style.display = "block";
   
}
