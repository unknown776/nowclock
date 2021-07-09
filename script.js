//digital clock
let a;
let time;
time = setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time
}, 1000);

//analogue clock
let d = new Date;
let htime = d.getHours();
let mtime = d.getMinutes();
let stime = d.getSeconds()
setInterval(() => {
    d = new Date;
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 100);

document.getElementById('btn').addEventListener('click', btnFunc);
function btnFunc(){
    clearInterval(time);
    let str = "Bhai/behen tera bahut bura time chal rha hai. Waise to poori duniya ka bura time chal rha hai par tera kuchh alag hi mamla hai. Apna khayaal rakhna!"
    document.getElementById('txt').innerHTML = str;
    document.getElementById('btn').remove()
}

let digital = document.getElementById('btn-left');
let analogue = document.getElementById('btn-right');
let digi_clock = document.getElementById("digi-clock");
let analo_clock = document.getElementById("clockContainer");
digital.addEventListener("click", ()=>{
    analogue.style.color = "black";
    analogue.style.backgroundColor = "white";
    digital.style.color = "white";
    digital.style.backgroundColor = "#0d6efd";
    digi_clock.style.display = "block";
    analo_clock.style.display = "none";
});

analogue.addEventListener("click", ()=>{
    digital.style.color = "black";
    digital.style.backgroundColor = "white";
    analogue.style.color = "white";
    analogue.style.backgroundColor = "#0d6efd";
    analo_clock.style.display = "block";
    digi_clock.style.display = "none";
});