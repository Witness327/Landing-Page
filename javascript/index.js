
function myFunction() {
    var x = document.getElementById('my-links');
    var y =window.matchMedia("(min-width: 768px)")

    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
         x.style.display = "block";
    } 

}