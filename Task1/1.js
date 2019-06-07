var n = 0;
var ArrOfImg = document.getElementsByTagName("img");  // "ArrOfImg" is an array of all images.
ArrOfImg[0].style.display = "";                       // only display 1st image.
for(var i = 1;i < ArrOfImg.length ;i++){              
    ArrOfImg[i].style.display = "none";               // to hide all other images.
}

function change(p){
    n += p;
    if(n > ArrOfImg.length - 1) n = 0;              // return to 1st image after last image.
    if(n < 0) n = ArrOfImg.length - 1;              // similar to above...just to maintain cycle
    for(var i = 0;i < ArrOfImg.length ;i++){        // hide all the images.
        ArrOfImg[i].style.display = "none";
    }
    ArrOfImg[n].style.display = "";                 // display only 1 image of particular index = n; 
}