window.setTimeout(function() {
    document.getElementById('box').style.opacity = '1';
}, 600);

var
aboutHTML = `
<h1>About Me</h1><br>
<p style="color: #f2f2f299;line-height:1.5;">
My name's Hoang Nguyen and I'm from Vietnam. I'm currently a high school student who is trying
to learn something new.
<br><br>
I love programming. Creating games, tools and any other stuff bring me joys. 
I learned a lot of programming languages. My main language is Python :D
</p>`,


ProjectsHTML = `
<h1>My Projects</h1><br>
<p style="color: #f2f2f299;line-height:1.5;font-size: 0.85rem;">
I created a lot of projects since i was 14 years old. Most of them are just normal
games like Flappy Bird, 2D ver of Subway Sufers, Clock GUI and some platformer games.
<br><br>
But when i got a bit older, these are the projects that im really proud of:<br>
<div id="appInfo">
    <img src="images/hnstore.jpg" alt="hn's store checker" width="25%" id="appIcon">
    <h3 id="appTitle">hn's store checker</h3>
    <p id="description">a software that get user's daily store<br> in a game called Valorant</p>
</div>
<div id="appInfo">
    <img src="images/chemistry.png" alt="hn's store checker" width="25%" id="appIcon">
    <h3 id="appTitle">Hoá Học (Chemistry)</h3>
    <p id="description"">a software that help secondary students<br> learn mostly anything about chemistry</p>
</div>
<div id="appInfo">
    <img src="images/hnoverlay.png" alt="hn's store checker" width="25%" id="appIcon">
    <h3 id="appTitle">hn's overlay</h3>
    <p id="description">a software that get other player's<br>stats when joining a valorant match</p>
</div>



</p>`,
ContactHTML = `
<h1>Contact</h1><br>
<p style="color: #f2f2f299;line-height:1.5;">
You can contact me thru these ways:<br>
(sorry if this look too bad im just really lazy to decorate this)
<div style="display: flex;justify: center;width: 100%">
    <a href="https://www.facebook.com/hnthedev" title="facebook" id="social">Facebook</a>
    <a href="https://www.youtube.com/@hnthedev" title="youtube" id="social">Youtube</a>
    <a href="https://www.reddit.com/user/hnthedev/" title="reddit" id="social">Reddit</a>
    <a href="https://x.com/hnthedev" title="X" id="social">X</a>
</div>
</p>`,
FunHTML = `
<h1>Fun</h1><br>
<p style="color: #f2f2f299;line-height:1.5;">
well there nothing fun (yet)`

const AboutBtn = document.getElementById("AboutBtn");
const ProjectsBtn = document.getElementById("ProjectsBtn");
const ContactBtn = document.getElementById("ContactBtn");
const FunBtn = document.getElementById("FunBtn");

var CurrentlyOpen = false;

AboutBtn.addEventListener('click', function() {
    document.getElementById("information").style.opacity = 0;
    
    setTimeout(function() {
        document.getElementById("information").innerHTML = aboutHTML;
        document.getElementById("information").style.opacity = 1;
      }, 300);
    if (!window.matchMedia('(max-width: 1200px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    } else {
        CurrentlyOpen = true;
    }
})
ProjectsBtn.addEventListener('click', function() {
    document.getElementById("information").style.opacity = 0;
    
    setTimeout(function() {
        document.getElementById("information").innerHTML = ProjectsHTML;
        document.getElementById("information").style.opacity = 1;
      }, 300);
      
    if (!window.matchMedia('(max-width: 1200px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    } else {
        CurrentlyOpen = true;
    }
})
ContactBtn.addEventListener('click', function() {
    document.getElementById("information").style.opacity = 0;
    
    setTimeout(function() {
        document.getElementById("information").innerHTML = ContactHTML;
        document.getElementById("information").style.opacity = 1;
      }, 300);
    if (!window.matchMedia('(max-width: 1200px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    } else {
        CurrentlyOpen = true;
    }
})
FunBtn.addEventListener('click', function() {
    document.getElementById("information").style.opacity = 0;
    
    setTimeout(function() {
        document.getElementById("information").innerHTML = FunHTML;
        document.getElementById("information").style.opacity = 1;
      }, 300);
    if (!window.matchMedia('(max-width: 1200px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    } else {
        CurrentlyOpen = true;
    }
})

window.addEventListener("resize", function(event) {
    if (window.matchMedia('(max-width: 1200px)').matches && CurrentlyOpen) {
        document.getElementById("box").style.transform="initial";
    }
    if (window.matchMedia('(min-width: 1230px)').matches && CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
    }
})