const x = new Date();
let year1 = x.getFullYear();

document.getElementById("currentyear").innerHTML = year1;

// console.log(yearm)

let latestDate = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = latestDate;