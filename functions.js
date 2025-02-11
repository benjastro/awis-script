function toggleDiv(id, displayShow) {
    element = document.getElementById(id);
    if (element.style.display == displayShow) {
        element.style.display = "none";
        return;
    } 

    element.style.display = displayShow;
}