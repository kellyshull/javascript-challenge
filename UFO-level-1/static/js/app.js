// from data.js
var tableData = data;

// console.log(tableData);


// get a reference to the table body in html (refer to activity 03-03)
const tbody = d3.select("tbody");

// YOUR CODE HERE!
// write code that appends table to web page and then adds new rows of dat for each UFO sighting

// Loop through tableData and console.log each ufo sighting
// tableData.forEach(ufoSighting => console.log(ufoSighting)); 

// // Step 2:  Use d3 to append one table row `tr` for each ufoSighting object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(ufoSighting => {
  console.log(ufoSighting);
  let row = tbody.append("tr");
});