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
<p style="color: #f2f2f299;line-height:1.5;">
I created a lot of projects since i was 14 years old. Most of them are just normal
games like Flappy Bird, 2D ver of Subway Sufers, Clock GUI and some platformer games.
<br><br>
But when i got a bit older, these are the projects that im really proud of:<br>
<div style="width=100%; padding-bottom: 10px;">
    <img src="images/hnstore.jpg" alt="hn's store checker" width="25%" style="float: left;padding: 5px;padding-right: 20px;max-height: 70px;max-width: 70px;">
    <h3 style="font-weight: 900;margin: 0px 10px;padding-top: 10px;padding-left: 20px;">hn's store checker</h3>
    <p style="text-align: left;color: #f2f2f299;font-size: 0.72rem;margin-top: 5px;">a software that get user's daily store<br> in a game called Valorant</p>
</div>
<div style="width=100%; padding-bottom: 10px;">
    <img src="images/chemistry.png" alt="hn's store checker" width="25%" style="float: left;padding: 5px;padding-right: 20px;max-height: 70px;max-width: 70px;">
    <h3 style="font-weight: 900;margin: 0px 10px;padding-top: 10px;padding-left: 20px;">Hoá Học (Chemistry)</h3>
    <p style="text-align: left;color: #f2f2f299;font-size: 0.72rem;margin-top: 5px;">a software that help secondary students<br> learn mostly anything about chemistry</p>
</div>
<div style="width=100%; padding-bottom: 10px;">
    <img src="images/hnoverlay.png" alt="hn's store checker" width="25%" style="float: left;padding: 5px;padding-right: 20px;max-height: 70px;max-width: 70px;">
    <h3 style="font-weight: 900;margin: 0px 10px;padding-top: 10px;padding-left: 20px;">hn's overlay</h3>
    <p style="text-align: left;color: #f2f2f299;font-size: 0.72rem;margin-top: 5px;">a software that get other player's<br>stats when joining a valorant match</p>
</div>



</p>`,
ContactHTML = `Contact`,
FunHTML = `Fun`























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