function currentTime() { 
let date= new Date();
let hour= date.getHours(); 
let minute= date.getMinutes();
let second= date.getSeconds();
hour = updateTime(hour);
minute = updateTime(minute);
second = updateTime(second);
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let currentDate= date.getDate();
let currentDay= days[date.getDay()];
let currentMonth= months[date.getMonth()];
let currentYear= date.getFullYear();
 let theDate = currentDay+", "+currentDate+" "+currentMonth+" "+currentYear;
    document.getElementById("date").innerHTML = theDate;  

document.getElementById ("clock").innerText=hour+":"+minute+":"+second;
let time= setTimeout(function(){
	currentTime()
}, 1000
);
}

// Adds 0 to single digit
function updateTime(c) {

if(c < 10) {
	return "0" + c;
}
else{
	return c;
}
}

currentTime();

//I added the things below for the resit. 

let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('day');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'day') {
    document.getElementById('switcher-id').href = 'day.css';
  } else if (theme == 'night') {
    document.getElementById('switcher-id').href = 'night.css';
  }   localStorage.setItem('style', theme);
}
