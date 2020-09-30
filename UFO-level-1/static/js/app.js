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
// tableData.forEach(ufoSighting => {
//   console.log(ufoSighting);
//   let row = tbody.append("tr");
// });

tableData.forEach(ufoSighting => {
  // console.log(ufoSighting);  
  let row = tbody.append("tr");
  Object.values(ufoSighting).forEach(value => {
 // Append a cell to the row for each value in the ufoSighting object
    var cell = row.append("td");
    cell.text(value);
  });
});

// USE date form in HTML document and search through date/time column to find rows that match user input

//  select the button from html using d3 use #filter-btn 

let submit = d3.select('#filter-btn');

// complete the click handler for the click

submit.on("click", function() {
  // prevent refreshing the page
  d3.event.preventDefault();

  // remove any children (THIS IS HOW THE HTML RESETS)
  tbody.html("");

  // select your input element from html 
  var inputElement = d3.select("#datetime");

  // get value of property of input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // console.log(tableData);

  // filter the data to date time
  let filteredData = tableData.filter(instance => instance.datetime === inputValue);

  console.log(filteredData);

  // append the input value to the webpage / html using function above
  filteredData.forEach(sightingDate => {
    // console.log(sightingDate);  
    let row = tbody.append("tr");
    Object.values(sightingDate).forEach(value => {
   // Append a cell to the row for each value in the ufoSighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });



  
});