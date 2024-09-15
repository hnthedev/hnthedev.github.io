window.setTimeout(function() {
    document.getElementById('box').style.opacity = '1';
}, 600);

const AboutBtn = document.getElementById("AboutBtn");
var CurrentlyOpen = false;

AboutBtn.addEventListener('click', function() {
    if (!window.matchMedia('(max-width: 720px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    }; 
    document.getElementById('information').style.opacity = 1;
})

window.addEventListener("resize", function(event) {
    if (window.matchMedia('(max-width: 720px)').matches && CurrentlyOpen) {
        document.getElementById("box").style.transform="initial";
    }
    if (window.matchMedia('(min-width: 730px)').matches && CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
    }
})