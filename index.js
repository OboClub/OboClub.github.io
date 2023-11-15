//if (confirm('Do you want to start with the obo')) {
    // Save it!
    //n1(); Det var en bugg i obo så att den stoppade spelet
//  } else {
    // Do nothing!
 //   console.log('Fine');
 // }



//Obo 3.0 aka smooth operator


//Bobo wish.com


//Ads
var AddIDX = 0
const OurAds = [ "Ad3.jpg"];


function NewAd() {
    AddIDX++;
    if (OurAds[AddIDX] == undefined){
        AddIDX = 0;
    }
    document.getElementById("adimage").src = OurAds[AddIDX];
}


setInterval(NewAd, 10000);


function Hpic() {
  document.getElementbyid("YourIDGoesHere").style.display="none";
}

function Spic() {
  document.getElementbyid("YourIDGoesHere").style.display="";
}

addEventListener('keyup', event => {
  if (event.code === 'Digit1') {
   Spic();
}
})

addEventListener('keyup', event => {
  if (event.code === 'Digit2') {
   Hpic();
}
})


function Homepage() {
  Array.from(document.getElementsByClassName("FaQ")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Startpage")).forEach(element => {
    element.style.display = "";
  });

  Array.from(document.getElementsByClassName("Info")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Contact")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("OboV")).forEach(element => {
    element.style.display = "none";
  });
}


function FaQ() {
  Array.from(document.getElementsByClassName("FaQ")).forEach(element => {
    element.style.display = "";
  });

  Array.from(document.getElementsByClassName("Startpage")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Info")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Contact")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("OboV")).forEach(element => {
    element.style.display = "none";
  });
}

function Info() {
  Array.from(document.getElementsByClassName("FaQ")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Startpage")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Info")).forEach(element => {
    element.style.display = "";
  });


  Array.from(document.getElementsByClassName("Contact")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("OboV")).forEach(element => {
    element.style.display = "none";
  });
}

function OboV() {
  Array.from(document.getElementsByClassName("FaQ")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Startpage")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Info")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Contact")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("OboV")).forEach(element => {
    element.style.display = "";
  });
}

function Contact() {
  Array.from(document.getElementsByClassName("FaQ")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Startpage")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Info")).forEach(element => {
    element.style.display = "none";
  });

  Array.from(document.getElementsByClassName("Contact")).forEach(element => {
    element.style.display = "";
  });

  Array.from(document.getElementsByClassName("OboV")).forEach(element => {
    element.style.display = "none";
  });
}


document.addEventListener("DOMContentLoaded", Homepage);
document.getElementbyid("YourIDGoesHere").style.display="none";

function Hpic() {
  document.getElementbyid("YourIDGoesHere").style.display="none";

//Here starts the code fore the obo verisions thing
let obo4tf = 0
let obo3tf = 0
let obo2tf = 0
let obo1tf = 0



function obo4(){
  let obo4 = document.getElementById("obo4");
   if (obo4tf == 0){
      obo4tf = 1;
      let obo4old = obo4.getBoundingClientRect();
      obo4.style.height = "auto";
      let obo4new = obo4.getBoundingClientRect();
      obo4.style.height = obo4old.height + "px";
      window.requestAnimationFrame(function(){
        obo4.style.height = obo4new.height + "px";
      });
      //obo4.style.height = "100px";
  } else {
      obo4.style.height = "0px";
      obo4tf = 0;
  }

}

function obo3(){
  let obo3 = document.getElementById("obo3");
   if (obo3tf == 0){
      obo3tf = 1;
      let obo3old = obo3.getBoundingClientRect();
      obo3.style.height = "auto";
      let obo3new = obo3.getBoundingClientRect();
      obo3.style.height = obo3old.height + "px";
      window.requestAnimationFrame(function(){
        obo3.style.height = obo3new.height + "px";
      });
  } else {
      obo3.style.height = "0px";
      obo3tf = 0;
  }
}


function obo2(){
  let obo2 = document.getElementById("obo2");
   if (obo2tf == 0){
      obo2tf = 1;
      let obo2old = obo2.getBoundingClientRect();
      obo2.style.height = "auto";
      let obo2new = obo2.getBoundingClientRect();
      obo2.style.height = obo2old.height + "px";
      window.requestAnimationFrame(function(){
        obo2.style.height = obo2new.height + "px";
      });
  } else {
      obo2.style.height = "0px";
      obo2tf = 0;
  }
}

function obo1(){
  let obo1 = document.getElementById("obo1");
   if (obo1tf == 0){
      obo1tf = 1;
      let obo1old = obo1.getBoundingClientRect();
      obo1.style.height = "auto";
      let obo1new = obo1.getBoundingClientRect();
      obo1.style.height = obo1old.height + "px";
      window.requestAnimationFrame(function(){
        obo1.style.height = obo1new.height + "px";
      });
  } else {
      obo1.style.height = "0px";
      obo1tf = 0;
  }
}}