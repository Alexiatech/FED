// JavaScript Document

var openButton = document.querySelector("header > button:first-of-type");

var sluitButton = document.querySelector(".sluitNav")

var inlogOpen = document.querySelector("header > button:nth-of-type(2)")
console.log(inlogOpen)

var sluitInlog = document.querySelector(".sluitLog");

var password = document.querySelector("#password") 

var confirm_password = document.querySelector("#comfirmPassword");



openButton.addEventListener("click", toonMenu);

sluitButton.addEventListener("click", sluitMenu);


inlogOpen.addEventListener("click", openLog);

sluitInlog.addEventListener("click", closeInlog);


password.addEventListener('change', validatePassword);

confirm_password.addEventListener('keyup', validatePassword);


// bron https://codepen.io/diegoleme/pen/qBpyvr

function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
      console.log("hi")

    } else {
      confirm_password.setCustomValidity('');
    }
  }

function toonMenu() {
    var deNav = document.querySelector("nav");

    deNav.classList.add("navMenu");
}

function sluitMenu(){
    var navSluit = document.querySelector("nav");


    navSluit.classList.remove("navMenu");
}

function openLog(){
    var secSluit = document.querySelector("header section");


    secSluit.classList.add("openSign");
    

}

function closeInlog(){

    var secSluit = document.querySelector("header section");

    console.log("Hi");

    secSluit.classList.remove("openSign");

}

