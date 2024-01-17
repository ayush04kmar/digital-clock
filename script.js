/* let h=document.getElementsByClassName("hour")[0];
let m=document.getElementsByClassName("minute")[0];
let s=document.getElementsByClassName("second")[0];
let time= new Date();
let hour= time.getHours();
let min= time.getMinutes();
let sec= time.getSeconds();
h.innerHTML= (hour-12)+":";
m.innerHTML= min+":";
s.innerHTML= sec;
/* let second=()=>(s.innerHTML= sec);
let timer=setInterval(function () {
    sec= time.getSeconds();
    s.innerHTML= sec;
}, 1000);
 */

let h = document.getElementsByClassName("hour")[0];
let m = document.getElementsByClassName("minute")[0];
let s = document.getElementsByClassName("second")[0];
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

// Display the current time in the HTML
h.innerHTML = (hour % 12) + ":";
m.innerHTML = min + ":";
s.innerHTML = sec;

// Update the time every second
let timer = setInterval(function () {
    // Update the value of the `second` variable
    sec = time.getSeconds();

    // Update the time in the HTML
    s.innerHTML = sec;
}, 1000);