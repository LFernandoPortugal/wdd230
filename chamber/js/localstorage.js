
let lastVisitText = document.querySelector('#days');

let lastVisitDays = window.localStorage.getItem("lastVisit");

const factor = 1000 * 60 * 60 * 24;
let daysBetween = Date.now() - lastVisitDays;
let numberOfDays = daysBetween / factor;

const daysNumber = Math.round(numberOfDays);

if (lastVisitDays == null) {
    lastVisitText.innerHTML = "Welcome to your first visit!"// new Date(Date.now());
} else {
    lastVisitText.innerHTML = "It is been: " +daysNumber+ " days since your last visit"
}

window.localStorage.setItem('lastVisit', Date.now());