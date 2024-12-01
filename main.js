const targetDate = new Date("2029-05-16T17:00:00");
const targetDateMilli = targetDate.getTime();
let timeDIffHours;
let timeDiffMin;
let timeDiffSec;
let timeDiffMilli;
let timeDiffDays;
let timeDisplay = document.querySelector("#displayTime")

function conversionUpdate(totalSeconds){
    //total seconds to hours
    //gonna have to convert to days
    timeDiffDays = Math.floor(totalSeconds / 86400);
    let remainingsec = totalSeconds % 86400;//gives remainder of interger division
    timeDIffHours = Math.floor(remainingsec / 3600)
    remainingsec = remainingsec % 3600
    timeDiffMin = Math.floor(remainingsec / 60)
    timeDiffSec = remainingsec % 60
    
    
}


function updateCountDown(){
    timeDiffMilli = targetDateMilli - Date.now();
    let timeDiffSecTotal = Math.floor(timeDiffMilli / 1000);
    conversionUpdate(timeDiffSecTotal);
    if (timeDiffDays < 10){//add leading zeros
        if (timeDiffDays == 0){
            timeDisplay.innerText = `00 Days : ${timeDIffHours} Hours : ${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
        }else{
            timeDisplay.innerText = `0${timeDiffDays} Days : ${timeDIffHours} Hours : ${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
        }
    } else if(timeDIffHours < 10){//add leading zeros
        if (timeDIffHours == 0){
            timeDisplay.innerText = `${timeDiffDays} Days : 00 Hours : ${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
        }else{
            timeDisplay.innerText = `${timeDiffDays} Days : 0${timeDIffHours} Hours : ${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
        }
    }else if(timeDiffMin < 10){//add leading zeros
        if (timeDiffMin == 0){
            timeDisplay.innerText = `${timeDiffDays} Days : ${timeDIffHours} Hours : 00 Minutes : ${timeDiffSec} Seconds`;
        }else{
            timeDisplay.innerText = `${timeDiffDays} Days : ${timeDIffHours} Hours : 0${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
        }
    }else if (timeDiffSec < 10){//add leading zeros
        if (timeDiffSec == 0){
            timeDisplay.innerText = `${timeDiffDays} Days : ${timeDIffHours} Hours : ${timeDiffMin} Minutes : 00 Seconds`;
        }else{
            timeDisplay.innerText = `${timeDiffDays} Days : ${timeDIffHours} Hours : ${timeDiffMin} Minutes : 0${timeDiffSec} Seconds`;
        }
    }else{
        timeDisplay.innerText = `${timeDiffDays} Days : ${timeDIffHours} Hours : ${timeDiffMin} Minutes : ${timeDiffSec} Seconds`;
    }
    
    
    
}

setInterval(updateCountDown, 1000)//update every second;

