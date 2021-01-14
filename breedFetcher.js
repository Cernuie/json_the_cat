const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback("We got an error! Check your url and try again.");
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("Error, check your url and try again.", null);
    } else {
      callback(error, data[0]["description"]);
    }
  });
  
};

module.exports = {
  fetchBreedDescription
};