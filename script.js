let digitalElement = document.querySelector('.digital')
let segundoElement = document.querySelector('.p_s');
let minutoElement = document.querySelector('.p_m');
let horaElement = document.querySelector('.p_h');


let updateClock = ()=> {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    

    let sDeg = ((360/60) * second) - 90 ;
    let mDeg = ((360/60) * minute) - 90 ;
    let hDeg = ((360/12) * hour) - 90 ;

    segundoElement.style.transform = `rotate(${sDeg}deg)`
    minutoElement.style.transform = `rotate(${mDeg}deg)`
    horaElement.style.transform = `rotate(${hDeg}deg)`
}
function fixZero(time){
    return time < 10 ? `0${time}` :time; //se time for menor que 10, '0' + time, senao time sem alteração
}

// function fixZero(time){
//     if (time<10){
//         return '0' + time;
//     }else{
//         return time;
//     }
// }

// function fixZero(time) {
//     let result;
//     if (time < 10) {
//         result = '0' + time;
//     } else {
//         result = time;
//     }
// }

updateClock();

setInterval(updateClock,1000);//de 1s em 1s roda a função