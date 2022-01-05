document.getElementById("anhnen").style.backgroundImage = "url(anhnen1.jpg)";
var i=1
changInmage=function(){

    var images= [
        "url(anhnen1.jpg)",
        "url(anhnen2.jpg)",
        "url(anhnen3.jpg)",
        "url(anhnen4.jpg)",
        "url(anhnen5.jpg)",
        "url(anhnen6.jpg)",
        "url(anhnen7.jpg)",
        "url(anhnen8.jpg)",

    ]
    document.getElementById("anhnen").style.backgroundImage =images[i];
    i++;
    if (i==7){
        i=0;
    }
}
setInterval(changInmage,999)