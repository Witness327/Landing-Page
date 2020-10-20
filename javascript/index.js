
function myFunction() {
    var x = document.getElementById('my-links');
    var y =window.matchMedia("(min-width: 768px)")
    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        alert("Tip: If you go to tablet or desktop view and do not see the Nav Bar. Please refresh the page.");
        x.style.display = "block";
    } 

}