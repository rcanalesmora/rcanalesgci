var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true",
  requestOptions
)
  .then(function(response) {
    return response.text();
  })
  .then(function(result) {
    return console.log(result);
  })
  ["catch"](function(error) {
    return console.log("error", error);
  });
