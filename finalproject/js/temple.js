const requestURL = "./data/data.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let name = document.createElement('h2');  
  let img = document.createElement('img');
  let address = document.createElement('h4');
  let phone = document.createElement('h4');
  let email = document.createElement('h4');
  let services = document.createElement('p');
  let history = document.createElement('p');
  let ordinance = document.createElement('p');
  let closure = document.createElement('p');

  // TextContent property of the name element to contain the temple's name
  name.innerHTML = `${temple.name}`;
  address.textContent = `${temple.address}`;
  phone.textContent = `${temple.phone}`;
  email.textContent = `${temple.email}`;
  services.innerHTML = `${temple.services}`;
  history.innerHTML = `${temple.history}`;
  ordinance.innerHTML = `${temple.ordinance}`;
  closure.innerHTML = `${temple.closure}`;

  // Image attributes
  img.setAttribute('src', temple.img);
  img.setAttribute('alt', `${temple.name}´s image`);
  img.setAttribute('loading', 'lazy');

  // Add/append
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(ordinance);
  card.appendChild(closure);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}