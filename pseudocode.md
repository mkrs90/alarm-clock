# Alarm Clock

## Clock functionality

- Hour - updates every hour - 24hrs in a day (clock can be 12 or 24 based)
    - clock data you pull in will be 24hrs, convert this to 12hr clock 
- Minute - updates every minute - 60 mins in an hour
- Seconds - updates every second - 60 seconds in a minute

format Hour:Minute:Seconds Month:Day:Year

function clockTime() {
const time = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

}


numbers must be 2 digits. Single numbers need to have a zero in front of them.
if (number < 10> 0 is placed in front of number then number is returned.

## Alarm Clock functionality

- User can enter a time they would like the alarm to go off. (or be notified that it is that specified time)
- if time entered equals current time send alert
- 


