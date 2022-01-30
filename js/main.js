import tablecsv from "./tablecsv.js";
const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new tablecsv(tableRoot);

var label = csvFileInput.nextElementSibling;

csvFileInput.addEventListener("change", e => {
  var fileName = '';
  fileName = e.target.value.split('\\').pop();

  if ((fileName.slice(fileName.length - 4)) == '.csv') {
    label.querySelector('span').innerHTML = fileName;
    Papa.parse(csvFileInput.files[0], {
      delimiter: ",",
      skipEmptyLines: true,
      complete: results => {
        tableCsv.update(results.data.slice(1), results.data[0]);
      }
    });
  }
  else{
    label.querySelector('span').innerHTML = 'Please upload supported file type';
  }
});




