const requestURL = '../json/houses.json';

async function fetchHousesJson(){
    const response = await fetch(requestURL);
    const houses = await response.json();
    return houses;
}


fetchHousesJson().then(house => {
    for (let index=0; index < house.houses.length ; index++) {

        let id  = house.houses[index].id;
        let image  = house.houses[index].image;
        let price  = house.houses[index].price;
        let city  = house.houses[index].city;
        let description  = house.houses[index].description;
        
        houseSection.innerHTML += `
            
            <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${id}. ${city} ${price}€</h5>
                <p class="card-text">${description}</p>
            </div>
           
            </div>

        `

    }
})

