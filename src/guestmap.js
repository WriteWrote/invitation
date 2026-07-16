const tableUrl = 'https://docs.google.com/spreadsheets/d/1I42JmIhqS4KgG9vB0rr9j2YAdUGPmUgWlxasPS7i57Q/export?format=csv&gid=703471449&single=true';

async function loadData() {
  const response = await fetch(tableUrl);
  const csv = await response.text();

  const rows = csv.split('\n').filter(row => row.trim());
  console.log(rows);


}

setInterval(loadData, 30000);
loadData().then(r => console.log("Error while waiting for table response" + r));