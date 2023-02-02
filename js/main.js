var alarmTime; //Global variable modified by getAlarmTime() that is used by startTime()
var exactTime;
//Function for Basic Clock Time (24hrs)
function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hour = doubleDigit(hour);
    min = doubleDigit(min);
    sec = doubleDigit(sec);
    document.getElementById("clockTime").innerHTML = hour + ":" +  min  + ":" + sec;
    exactTime = hour + ":" +  min  + ":" + sec;
    //"sounds" the alarm
    if (exactTime === alarmTime) {
        alert("sound alarm");
    }
    setTimeout(startTime, 1000); //updates the seconds so you don't have to refresh page
}

//fixes the issue when a number is less than 10 and only 1 digit
function doubleDigit(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Sets the alarm to elements selected in html form. runs them through doubleDigit() to fix single digits and saves output to alarmTime
function getAlarmTime() {
    let alarmHour = document.getElementById('setHour').value;
    let alarmMin = document.getElementById('setMin').value;
    alarmHour = doubleDigit(alarmHour);
    alarmMin = doubleDigit(alarmMin);
    alarmTime = alarmHour + ":" + alarmMin + ":00";
}

//Changes time from military to standard
// function changeClockType() {

// }

//Clears Alarm fields when clicked
// function clearAlarm() {
    
// }

