var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    console.log("Hi")
} 


// Nav bar

var sidemenu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0" 
}

function closeMenu() {
    sidemenu.style.right = "-362px"
}


// header text
var h1 = document.querySelector(".header-text h1");

h1.innerHTML = `<h1>Hi, I'm <span>Zaki</span> <br> Nasiri</h1>`;


