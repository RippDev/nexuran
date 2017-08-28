function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menubar") {
        x.className += " responsive";
    } else {
        x.className = "menubar";
    }
}

$(function() {                
    setTimeout(function() {
        $('.Fly-text').removeClass('hidden');
    }, 500);
})();