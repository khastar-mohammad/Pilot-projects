const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval( () => {

    let day = new Date();
    let hr = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let sc = day.getSeconds() * deg;
    hh.style.transform = 'rotateZ(${(hh)+(mm/12)}deg)';
    mm.style.transform = 'rotateZ(${mm}deg)';
    ss.style.transform = 'rotateZ(${ss}deg)';
    
})