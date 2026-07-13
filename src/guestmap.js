console.log("Heloo")
// выгрузка данных из таблицы
const SHEET_ID = '1qq9H3re_5A7QC0RRX2OimozcSEMcS3MgwdO0qBQ1LEY';
const RANGE = 'Лист1!A1:B20';
const API_KEY = 'AIzaSyA8QmvjZbf_fkRHKcF6Q248olNwAjmDYk8';

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const rows = data.values;

    console.log(rows);
  });