function showLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function hideLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("loginPopup");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showsignup() {
    document.getElementById("signinpopup").style.display = "block";
}
function hidesignup() {
    document.getElementById("signinpopup").style.display = "none";
}