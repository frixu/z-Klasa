var sidebarOff = true;
function sidebarButton() {            
    var sidebarField = document.getElementsByClassName("sidebar-text");
    var sidebar = document.getElementById("sidebar");

    if (sidebarOff == false) {
        for (let i = 0; i < sidebarField.length; i++) {
               sidebarField[i].style.display = "none"; 
        }
        sidebar.setAttribute("style","width: 80px");
        sidebarOff = true
    } else if (sidebarOff == true) {
        sidebar.setAttribute("style","width: 200px");
        setTimeout(function(){
            for (let i = 0; i < sidebarField.length; i++) {
                sidebarField[i].style.display = "block";
            }
        }, 50)
        sidebarOff = false;
    } 
}