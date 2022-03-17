// weather script
// const t = parseFloat(document.querySelector("#temp").textContent);
// const s = parseFloat(document.querySelector("#speed").textContent);


// if(t <= 50 && s > 3) {
//     const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
//     document.querySelector("#chill").innerHTML = Math.round(windchill) + " ";
// }
// else {
//     document.querySelector("#chill").innerHTML = "N/A"
// }


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

// Weather temp__________________

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Cusco&units=imperial&appid=04d04147fee700bed854b769e00db8ca";
// const apiURL = "api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} F°`;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = ponerEnMayuscula(desc);
    document.querySelector('#speed').textContent = `${jsObject.wind.speed} m/h`;
    const t = jsObject.main.temp.toFixed(0);
    const s = jsObject.wind.speed;

    if(t <= 50 && s > 3) {
        const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
        document.querySelector("#chill").innerHTML = Math.round(windchill) + " ";
    }
    else {
        document.querySelector("#chill").innerHTML = "N/A"
    }
  });


// script to uppercase
  function ponerEnMayuscula(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres (texto).');
    }

    let palabras = frase.split(' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}
