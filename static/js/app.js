// from data.js
const tableData = data;

const datetime = document.getElementById("datetime");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const shape = document.getElementById("shape");


//form.addEventListener("keydown", updateFilters);



// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
const filters = {};

// 3. Use this function to update the filters. 
function updateFilters(evt) {

  // If the 'Enter' key was pressed
  if(evt.keyCode === 13){

      // 4a. Save the element that was changed as a variable.
      const inputs = [];
      // Array of Objects
      inputs.push({id: "datetime", entry: datetime.value.trim()});
      inputs.push({id: "city", entry: city.value.trim()});
      inputs.push({id: "state", entry: state.value.trim()});
      inputs.push({id: "country", entry: country.value.trim()});
      inputs.push({id: "shape", entry: shape.value.trim()}); 

      // 4b. Save the value that was changed as a variable.
      // copy of input is stored in filters for values that changed
      inputs.forEach(item => {
        const key = item["id"];
        const value = item["entry"];
        if(value.length > 0){
          filters[key] = value;
        }
      });

      // 4c. Save the id of the filter that was changed as a variable.

      // 5. If a filter value was entered then add that filterId and value
      // to the filters list. Otherwise, clear that filter from the filters object.

      // 6. Call function to apply all filters and rebuild the table
      filterTable(filters);

    } 
  return;
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(entries) {

    //const key = Object.keys(entries);
  
    // 8. Set the filtered data to the tableData.
  
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    console.log('entries.length = '+Object.values(entries));

    let dataset = data.filter(item => {
      const list = Object.keys(entries);
      if(list.length === 0) return true;
      console.log("size of list = "+list.length);
      return list.every(k => {
        return ((entries[k] == '') || (entries[k] == item[k]))
      });
    });
    console.log('size of dataset is '+dataset.length);
    console.log('size of data is '+ data.length);
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(dataset);
  }
  
  // 2. Attach an event to listen for changes to each filter
  datetime.addEventListener("keydown", updateFilters);
  city.addEventListener("keydown", updateFilters);
  country.addEventListener("keydown", updateFilters);
  shape.addEventListener("keydown", updateFilters);
  
  
  // Build the table when the page loads
  buildTable(tableData);
