// weather script
const t = parseFloat(document.querySelector("#temp").textContent);
const s = parseFloat(document.querySelector("#speed").textContent);


if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#chill").innerHTML = Math.round(windchill) + " ";
}
else {
    document.querySelector("#chill").innerHTML = "N/A"
}


// ANOTHER WAY
// let windchill = "";

// if (t <= 50 && s > 3) {
//   windchill = windChill(t, s);
//   windchill = windchill+" " ;
// } else {
//   windchill = "N/A";
// }

// document.querySelector("#chill").innerHTML = windchill;

// function windChill(temp, speed) {
//   let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
//   return windChill.toFixed(2);
// }

// console.log(windchill)