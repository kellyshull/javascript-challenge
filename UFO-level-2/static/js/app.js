
// get a reference to the table body in html (refer to activity 03-03)
var tableData = data;
const tbody = d3.select("tbody");

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

  const filters = {
    datetime: d3.select("#datetime").property("value"),
    city: d3.select("#city").property("value"),
    state: d3.select("#state").property("value"),
    country: d3.select("#country").property("value"),
    shape: d3.select("#shape").property("value")
  }

  
  // console.log(tableData);
  let filteredData = tableData.map(x => x)
  for (let key in filters){
    if (filters[key]){
      filteredData = filteredData.filter(instance => instance[key] === filters[key]);
    }
    


  }
 
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