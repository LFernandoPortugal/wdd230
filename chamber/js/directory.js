const requestURL = 'https://lfernandoportugal.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');
let dataRequest

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let img = document.createElement('img');
  let address = document.createElement('h3');
  let phone = document.createElement('h3');
  let website = document.createElement('a');

  // TextContent property of the name element to contain the company's name
  name.innerHTML = `${company.name}`;
  address.textContent = `${company.address}`;
  phone.textContent = `${company.phone}`;
  website.textContent = `${company.website}`;

  // Image attributes
  img.setAttribute('src', company.img);
  img.setAttribute('alt', `${company.name}´s image`);
  img.setAttribute('loading', 'lazy');

  // Add/append
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}


document.getElementById('listView').addEventListener('click', function () {
    document.getElementById('listView').classList.add('selected');
    document.getElementById('cardsView').classList.remove('selected');
    cards.classList.add('listView')
    table = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>website</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>`;

    cards.innerHTML = table;
    dataRequest.forEach((c) => {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let address = document.createElement('th');
        let phone = document.createElement('th');
        let website = document.createElement('th');

        name.textContent = c.name;
        address.textContent = c.address;
        phone.textContent = (c.tel == null) ? 'Not available' : c.phone;
        website.textContent = c.website;

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(tel);
        tr.appendChild(website);

        document.querySelector('table > tbody').appendChild(tr);
    });
    
});

document.getElementById('cardsView').addEventListener('click', function(){
    document.getElementById('cardsView').classList.add('selected');
    document.getElementById('listView').classList.remove('selected');
    cards.classList.remove('listView');
    cards.innerHTML="";
    dataRequest.forEach(displayCompanies);
})