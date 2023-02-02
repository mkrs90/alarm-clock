
//Function for Basic Clock Time (24hrs)

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = doubleDigit(m);
    s = doubleDigit(s);
    document.getElementById("clockTime").innerHTML = h + ":" +  m  + ":" + s;
    let exactTime = h + ":" +  m  + ":" + s;
    if (exactTime === alarmTime) {
        alert("sound alarm");
    }
    setTimeout(startTime, 1000); //updates the seconds so you don't have to refresh page
    //return exactTime;
}

const clocksTime = startTime();
//fixes the issue when a number is less than 10 and only 1 digit
function doubleDigit(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//Function for Setting Alarm
var alarmTime;
function getAlarmTime() {
    let alarmHour = document.getElementById('setHour').value;
    let alarmMin = document.getElementById('setMin').value;
    alarmMin = doubleDigit(alarmMin);
    alarmTime = alarmHour + ":" + alarmMin + ":00";
    //return alarmTime;
}

const timeOfTheAlarm = getAlarmTime();

//Function for sounding the alarm!

function soundTheAlarm(clocksTime, timeOfTheAlarm) {
    if (clocksTime === timeOfTheAlarm) {
        alert("The alarm has been sounded!");
    };
}

