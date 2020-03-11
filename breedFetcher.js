const request = require('request');
const args = process.argv.splice(2);
request(`https://api.thecadtapi.com/v1/breeds/search?q=${args}`, (err, response, body) => {
  if (err) {
    console.log(`Error: ${err.message}`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Did not find any matches for ${args}`);
    return;
  }
  for (const key in data) {
    console.log(data[key].description);
    return;
  }
});
