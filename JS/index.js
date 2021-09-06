let switchBtn = $("#container #switch");

let windMill = $$("#container .main .windmill_group .windmill .mill_head");
let cloudWind = $$("#container .main .cloud_wind_group");
console.log(cloudWind);
switchBtn.onclick = function () {
    switchBtn.classList.toggle("switch-over");
    for(let i = 0; i < windMill.length; i++){
        windMill[i].classList.toggle("upSpead");
    }
    for(let j = 0; j < cloudWind.length; j ++){
        cloudWind[j].classList.toggle("cloudUp");
    }
}