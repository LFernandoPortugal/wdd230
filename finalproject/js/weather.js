const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.983259418052185&lon=-77.09550897618398&units=imperial&exclude=minutely,hourly&appid=04d04147fee700bed854b769e00db8ca";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Cusco&units=imperial&appid=04d04147fee700bed854b769e00db8ca";
// 38.983259418052185, -77.09550897618398

// Forecast part
const currentDate = document.querySelector("#current-date");
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

currentDate.innerHTML = days[day] + ", " + date + " " + months[month]
console.log(days[day+1])


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = `${jsObject.current.temp.toFixed(0)} F°`;
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@4x.png`;
    const desc = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity;
    const alert = jsObject.alerts;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = capitalyze(desc);
    document.querySelector('#humidity').textContent = `${humidity} %`;
    document.querySelector('#alert').textContent = `${alert}`;
    // forecast1
    document.querySelector('#temp1').textContent = `${jsObject.daily[1].temp.day.toFixed(0)} F°`;
    const iconsrc1= `https://openweathermap.org/img/wn/${jsObject.daily[1].weather[0].icon}@2x.png`;
    const desc1 = jsObject.daily[1].weather[0].description;
    const humidity1 = jsObject.daily[1].humidity;
    document.querySelector('#weathericon1').setAttribute('src', iconsrc1);
    document.querySelector('#weathericon1').setAttribute('alt', desc1);
    document.querySelector('#figcaption1').textContent = capitalyze(desc1);
    document.querySelector('#humidity1').textContent = `${humidity1} %`;
    // forecast2
    document.querySelector('#temp2').textContent = `${jsObject.daily[2].temp.day.toFixed(0)} F°`;
    const iconsrc2= `https://openweathermap.org/img/wn/${jsObject.daily[2].weather[0].icon}@2x.png`;
    const desc2 = jsObject.daily[2].weather[0].description;
    const humidity2 = jsObject.daily[2].humidity;
    document.querySelector('#weathericon2').setAttribute('src', iconsrc2);
    document.querySelector('#weathericon2').setAttribute('alt', desc2);
    document.querySelector('#figcaption2').textContent = capitalyze(desc2);
    document.querySelector('#humidity2').textContent = `${humidity2} %`;
    // forecast3
    document.querySelector('#temp3').textContent = `${jsObject.daily[3].temp.day.toFixed(0)} F°`;
    const iconsrc3= `https://openweathermap.org/img/wn/${jsObject.daily[3].weather[0].icon}@2x.png`;
    const desc3 = jsObject.daily[3].weather[0].description;
    const humidity3 = jsObject.daily[3].humidity;
    document.querySelector('#weathericon3').setAttribute('src', iconsrc3);
    document.querySelector('#weathericon3').setAttribute('alt', desc3);
    document.querySelector('#figcaption3').textContent = capitalyze(desc3);
    document.querySelector('#humidity3').textContent = `${humidity3} %`;
  });


// script to uppercase
  function capitalyze(frase) {
    if (typeof frase != 'string') {
        throw TypeError('The argument should be string(text).');
    }

    let palabras = frase.split(' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}


