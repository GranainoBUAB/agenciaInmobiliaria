const requestURL = '/json/houses.json';

async function fetchHousesJson(){
    const response = await fetch(requestURL);
    const houses = await response.json();
    return houses;
}


fetchHousesJson().then(house => {
    for (let index=0; index < house.houses.length ; index++) {
        let price  = house.houses[index].price;
        console.log(price);


    }
})
