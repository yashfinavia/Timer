const days_1 = document.getElementById('days');
const hours_1 = document.getElementById('hours');
const min_1 = document.getElementById('min');
const sec_1 = document.getElementById('sec');

const newDate = "1 Jan 2021";
function countdown(){
	//const date = document.getElementById("date").value;
	const newYearDate = new Date(newDate);
	const currDate = new Date();
	const ans = (newYearDate - currDate)/1000;
	const days = Math.floor(ans/3600/24);
	const minutes = Math.floor(ans/60)%60;
	const hours = Math.floor(ans/3600)%24;
	const second = Math.floor(ans)%60;
	//console.log(days);
	days_1.innerHTML =  days;
	min_1.innerHTML =  minutes;
	hours_1.innerHTML =  hours;
	sec_1.innerHTML =  second;
}
countdown();
setInterval(countdown,1000);