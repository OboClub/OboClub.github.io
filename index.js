if (confirm('Do you want to start with the obo')) {
    // Save it!
    //n1(); Det var en bugg i obo så att den stoppade spelet
  } else {
    // Do nothing!
    console.log('Fine');
  }



//Obo 3.0 aka smooth operator


//Bobo wish.com


//Ads
var AddIDX = 0
const OurAds = ["Ad1.png", "Ad2.png", "terromeme.jpg", "GangSIgns.jpg"];


function NewAd() {
    AddIDX++;
    if (OurAds[AddIDX] == undefined){
        AddIDX = 0;
    }
    document.getElementById("adimage").src = OurAds[AddIDX];
}


setInterval(NewAd, 10000);