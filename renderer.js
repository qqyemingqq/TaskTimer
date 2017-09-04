var startButton = document.querySelector('.startButton');
var resetButton = document.querySelector('.resetButton');

var timer = document.querySelector('.timer');

var time = 0



function secToTimeFormat(time) {
    if (typeof (time) == 'number') {
        var sec = (time % 60) << 0;
        var min = (time / 60) << 0;
        var hour = (time / 60 / 60) << 0;
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        return (hour + ":" + min + ':' + sec)
    }
}

var timerInterval;

startButton.addEventListener('pointerup',()=>{
     if(startButton.innerHTML == '开始'){
        startButton.innerHTML = '暂停';
        timerInterval = window.setInterval(()=>{
            time ++;
            timer.innerHTML = secToTimeFormat(time);
            console.log(time);
         },1000);
     }else{
        startButton.innerHTML = '开始';
        clearInterval(timerInterval);
     }
});

resetButton.addEventListener('pointerup',()=>{
    clearInterval(timerInterval);
    startButton.innerHTML = '开始';
    time = 0;
    timer.innerHTML = secToTimeFormat(time);
})