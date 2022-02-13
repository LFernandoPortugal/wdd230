// weather script
const t = parseFloat(document.querySelector("#temp").textContent);
const s = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}

document.querySelector("#chill").innerHTML = windchill;

function windChill(temp, speed) {
  let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return windChill.toFixed(2);
}

console.log(windchill)