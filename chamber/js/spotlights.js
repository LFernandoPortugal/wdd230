const requestURL = "./data/data.json";
const cards = document.querySelector('.spotlight');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companiesFilter = companies.filter(status => status.status === "silver" || status.status === "gold" );
    for (i = 1; i < 4; i++) {
        random = Math.floor(Math.random() * companiesFilter.length);
        displayCompanies(companiesFilter[random], `.spotlight${i}`);
        companiesFilter = companiesFilter.filter(company => (company.name != companiesFilter[random].name));
    }
    // companiesFilter.forEach(displayCompanies);
  });

  function displayCompanies(company, spotlight) {

    let card = document.querySelector(spotlight);
    // Create elements to add to the document
    // let card = document.createElement('div');
    let name = document.createElement('h2');
    let img = document.createElement('img');
    let address = document.createElement('h3');
    let hr = document.createElement('hr');
    let phone = document.createElement('p');
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
    website.setAttribute('href',`${company.website}`);
    website.setAttribute('target',"_blank");
  
    // Add/append
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(hr);
    card.appendChild(phone);
    card.appendChild(website);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    // cards.appendChild(card);
  }