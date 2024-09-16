window.setTimeout(function() {
    document.getElementById('box').style.opacity = '1';
}, 600);

var
aboutHTML = `
<h1 style="font-weight: 900;">About Me</h1><br>
<p style="color: #f2f2f299;line-height:1.5;">
My name's Hoang Nguyen and I'm from Vietnam. I'm currently a high school student who is trying
to learn something new.
<br><br>
I love programming. Creating games, tools and any other stuff bring me joys. 
I learned a lot of programming languages. My main language is Python :D
</p>`,



ProjectsHTML = `
<h1>My Projects</h1>`,
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
    if (!window.matchMedia('(max-width: 720px)').matches && !CurrentlyOpen) {
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
      
    if (!window.matchMedia('(max-width: 720px)').matches && !CurrentlyOpen) {
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
    if (!window.matchMedia('(max-width: 720px)').matches && !CurrentlyOpen) {
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
    if (!window.matchMedia('(max-width: 720px)').matches && !CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
        CurrentlyOpen = true;
    } else {
        CurrentlyOpen = true;
    }
})

window.addEventListener("resize", function(event) {
    if (window.matchMedia('(max-width: 720px)').matches && CurrentlyOpen) {
        document.getElementById("box").style.transform="initial";
    }
    if (window.matchMedia('(min-width: 730px)').matches && CurrentlyOpen) {
        document.getElementById('box').style.transform='translate(50%,-50%)';
    }
})