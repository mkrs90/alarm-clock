var alarmTime; //Global variable modified by getAlarmTime() that is used by startTime()
var exactTime;
const namesOfMonth = [ //array used by todaysDate() to turn .getmonth method into string 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

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
        alert("ALARM ALARM ALARM!");
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

function todaysDate() {
    const today = new Date();
    let theDay = today.getDate();
    let theMonth = today.getMonth(); //Dates are like an array January = 0, Feb = 1
    let theYear = today.getFullYear();
    theDay = doubleDigit(theDay);
    //takes the number you got from the getMonth method and uses it to access the corresponding number in the array. Solves the Jan = 0 issue.    
    let monthName = namesOfMonth[theMonth];
    document.getElementById('clockDate').innerHTML = theDay + " " + monthName + " " + theYear;
}

//Sets the alarm to elements selected in html form. runs them through doubleDigit() to fix single digits and saves output to alarmTime
function getAlarmTime() {
    let alarmHour = document.getElementById('setHour').value;
    let alarmMin = document.getElementById('setMin').value;
    alarmHour = doubleDigit(alarmHour);
    alarmMin = doubleDigit(alarmMin);
    alarmTime = alarmHour + ":" + alarmMin + ":00";
    alert("Alarm has been set");
}

//clears alarm
function clearAlarm() {
    let element = document.getElementById("alarmForm");
    element.reset()
    alarmTime = "00:00:00";
    alert("Alarm has been cancelled");
}



