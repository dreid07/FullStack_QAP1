const moment = require("moment"); // requests that moment provide the current date and time
console.log(moment());

var myDate = new Date(); // displays todays date from the system
var myDate2 = moment(myDate).format("dddd"); // displays todays date using one of moment's many formatting options
var myDate3 = moment(myDate).add(90, "days").calendar(); // displays todays date and adds 90 days
var myDate4 = moment(myDate).subtract(90, "days").calendar(); // displays todays date and subtracts 90 days

console.log(myDate);
console.log(myDate2);
console.log(myDate3, " will be the date in 90 days");
console.log(" 90 days ago the date was ", myDate4);
