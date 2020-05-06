let restaurantInfo = document.querySelector("#restaurants-list");


document.querySelector("#search-button").addEventListener("click", function () {
  let restaurantSearchBar = document.querySelector("#restaurant-search").value;
  clearEntries ();
fetch(`http://localhost:8088/restaurants?q=${restaurantSearchBar}`)
  .then((restaurants) => restaurants.json())
  .then((parsedRestaurants) => {
    // console.table(parsedRestaurants)
    //run loop to print names to DOM when searched
    parsedRestaurants.forEach((name) => {
      // console.log(name.restaurant.location.address)
      // restaurant, address, rating, cost <-- parameters
      restaurantInfo.innerHTML += createRestaurantList(
        name.restaurant.url,
        name.restaurant.name,
        name.restaurant.location.address,
        name.restaurant.user_rating.aggregate_rating,
        name.restaurant.average_cost_for_two,
        name.restaurant.menu_url);
    });
  });
})

//NEXT STEP --- Search bar 

// Add a search bar and button to your app. When the user enters a series of letters into the search bar and presses the "search" button, print all of the restaurants whose name includes the string that the user entered. json-server has built in search functionality-- take some time to read the docs before you attempt this.
// Stretch Goal 2:
// Refactor your search bar so that the user can press the "Enter" key and see the same results as if they hit the search button.
// If you get done with all this, we have additional stretch goals for you-- feel free to slack us if you're interested in an extra challenge (edited)
