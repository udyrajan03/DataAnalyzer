const Papa = require('papaparse');

document.getElementById('fileInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;

  Papa.parse(file, {
    complete: function (results) {
      displayCSVData(results.data);
    }
  });
});

function displayCSVData(data) {
  const table = document.createElement('table');
  data.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  document.getElementById('data').innerHTML = ''; // Clear previous data
  document.getElementById('data').appendChild(table);
}
