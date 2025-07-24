//cross button//

var offer = document.getElementById("offer")
var cross = document.getElementById("crossbtn")

crossbtn.addEventListener("click",function(){ 
    
        offer.remove()
})


//side nav//
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("closebtn")

menuicon.addEventListener("click", function(){
  sidenav.style.left = 0
})
closebtn.addEventListener("click",function(){
  sidenav.style.left = "-50%"
})