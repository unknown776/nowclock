let a;
let time;
time = setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time
}, 500);

document.getElementById('btn').addEventListener('click', btnFunc);

function btnFunc(){
    clearInterval(time);
    let str = "Bhai/behen tera bahut bura time chal rha hai. Waise to poori duniya ka bura time chal rha hai par tera kuchh alag hi mamla hai. Apna khayaal rakhna!"
    document.getElementById('txt').innerHTML = str;
    document.getElementById('btn').remove()
}
