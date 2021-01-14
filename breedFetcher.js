let args = process.argv.slice(2)[0];
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;
console.log(url);
request(url, (error, response, body) => {
  if (body === "[]") {
    return console.log("I think you might've inputted a wrong name!");
  }
  if (error) {
    console.log("We got an error! Check your url and try again.");
  }
  const data = JSON.parse(body);
  if (data[0]["description" === undefined]) {
    console.log("Error, check your url and try again.");
  } else {
    console.log(data[0]["description"]);
  }
});
