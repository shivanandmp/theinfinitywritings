function openclosemenu() {
    "use strict";
    var menu = document.getElementById("menu");
    var close = document.getElementById("closedbars");
    var open = document.getElementById("openbars");
    if(menu.style.display !== 'block') {
        menu.style.display = 'block';
        open.style.display = 'none';
        close.style.display = 'inline-block';
    } else {
        menu.style.display = "none";
        open.style.display = "inline-block";
        close.style.display = "none";
    }
}