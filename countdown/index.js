
// new Date()
// 引数がない場合、現在の時刻でオブジェクトを生成

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");


const newYears = '1 Jan 2023';

function countDown() {  
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = Math.floor((newYearDate - currentDate)/1000);
    
    const seconds = Math.floor(totalSeconds%60);
    const mins = Math.floor(totalSeconds/60 % 60);
    const hours = Math.floor(totalSeconds/60/60 % 24);
    const days = Math.floor(totalSeconds/60/60/24);
    
    // console.log(seconds, mins, hours, days);

     daysEl.innerHTML = formatTime(days);
     hoursEl.innerHTML = formatTime(hours);
     minsEl.innerHTML = formatTime(mins);
     secEl.innerHTML = formatTime(seconds); 
};

function formatTime(time) {  
    return time<0 ? `0${time}` : time;
}

// initial call
countDown();
setInterval(countDown, 1000);