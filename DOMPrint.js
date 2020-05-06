//reusable function to print on DOM
//Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
//Card creator 
createRestaurantList = (website, restaurant, address, rating, cost, menu) => {
    return `
    <div class="card row" style="width: 18rem;">
    <div class="card-body col-sm">
    <p><b><a href="${website}" target="blank">${restaurant}</b></br></a></p>
    <p>Address: ${address} </br></p>
    <p>Average rating: ${rating} </br></p>
    <p>Average cost for two: $${cost} </br></p>
    <a href="${menu}" target="blank" class="btn btn-primary">Menu</a>
    </div>
    </div>
    `
}

// clear results
const clearEntries = () => {
    document.querySelector("#restaurants-list").innerHTML = "";
}