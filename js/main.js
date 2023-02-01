
//Function for Basic Clock Time
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = doubleDigit(m);
    s = doubleDigit(s);
    document.getElementById("clockTime").innerHTML = h + ":" +  m  + ":" + s;
    setTimeout(startTime, 1000); //updates the seconds so you don't have to refresh page
}

//fixes the issue when a number is less than 10 and only 1 digit
function doubleDigit(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Function for Basic Clock Date


//Function for Setting Alarm