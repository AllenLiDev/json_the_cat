const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, `Did not find any results for ${breedName}`);
      return;
    }
    callback(null, data[0].description);
    return;
  });
};

module.exports = { fetchBreedDescription };
