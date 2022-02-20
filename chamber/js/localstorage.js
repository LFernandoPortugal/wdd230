
let lastVisitText = document.querySelector('#days');

let lastVisitDays = window.localStorage.getItem("lastVisit");

const factor = 1000 * 60 * 60 * 24;

if (lastVisitDays == null) {
    lastVisitText.innerHTML = "Welcome to your first visit!"// new Date(Date.now());
} else {
    lastVisitText.innerHTML = "It is been: " +numberOfDays+ "days since your last visit"
}

const lastVisit = Date.parse(lastVisitDays);

let daysBetween = Date.now() - lastVisitDays;
let numberOfDays = daysBetween / factor;

window.localStorage.setItem('lastVisit', new Date(Date.now()));

const daysNumber = Math.round(numberOfDays);
lastVisitText.innerHTML = daysNumber;