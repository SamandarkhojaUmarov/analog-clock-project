let diallines = document.getElementsByClassName('diallines');
let clockE1 = document.getElementsByClassName('clock')[0];

for (let i = 1; i < 60; i++) {
  clockE1.innerHTML += "<div class='diallines'></div>";
  diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {

  let time = new Array(4),
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),

    hDeg = h * 30 + m * (360 / 720),
    mDeg = m * 30 + s * (360 / 720),
    sDeg = s * 6;

    hE1 = document.querySelector('.hour-hand'),
    mE1 = document.querySelector('.minute-hand'),
    sE1 = document.querySelector('.second-hand'),

    hE1.style.transform = "rotate(" + hDeg + "deg)";
    mE1.style.transform = "rotate(" + mDeg + "deg)";
    sE1.style.transform = "rotate(" + sDeg + "deg)";


}
setInterval("clock()", 100)