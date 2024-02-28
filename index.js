var i=0;
var audio0=new Audio("sounds/crash.mp3");
var audio1=new Audio("sounds/kick-bass.mp3");
var audio2=new Audio("sounds/snare.mp3");
var audio3=new Audio("sounds/tom-1.mp3");
var audio4=new Audio("sounds/tom-2.mp3");
var audio5=new Audio("sounds/tom-3.mp3");
var audio6=new Audio("sounds/tom-4.mp3");
var audioplay=[audio0,audio1,audio2,audio3,audio4,audio5,audio6]
var x= document.querySelectorAll(".drum").length;
while (i<x){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonIneerhtml=this.innerHTML;
        console.log(buttonIneerhtml);
        x1(buttonIneerhtml);
        animationbottun(buttonIneerhtml);
    });
    
    
i++;
}
document.addEventListener("keydown",function (event) {
        var charpress=event.key;
        x1(charpress);
        animationbottun(charpress);

});
function x1(char) {
    switch (char) {
        case 'w':
            audio0.play();
            break;
        case 'a':
            audio1.play();
            break;    
        case 's':
            audio2.play();
            break;    
        case 'd':
            audio3.play();
            break;
        case 'j':
            audio4.play();
            break;
        case 'k':
            audio5.play();
            break;
        case 'l':
            audio6.play();
            break;                    
        default:
            break;
    }
}
function animationbottun(curuntkey){
    var activebutton=document.querySelector("."+curuntkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200);
}
