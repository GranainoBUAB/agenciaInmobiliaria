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
            
            <img src="${image}" alt="">
            <div>id. ${id}</div>
            <p>El Precio es ${price}</p>
            <p>Esta en ${city}</p>
            <div>info : ${description}</div>

        `

    }
})

