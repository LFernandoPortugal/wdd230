const x = new Date();
let year1 = x.getFullYear();

document.getElementById("currentyear").innerHTML = year1;

// console.log(yearm)

let latestDate = document.lastModified
document.getElementById("lastmodified").innerHTML = latestDate;

function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}

const y = document.getElementById("hamburgerBtn")
y.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;