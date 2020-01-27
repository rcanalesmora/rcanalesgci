var request = require("request");

var options = {
  method: "GET",
  url:
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true",
  headers: {}
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
