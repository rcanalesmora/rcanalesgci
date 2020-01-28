const myHeaders: Headers = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true",
  requestOptions
)
  .then(response => response.text())
  .then(result => document.write(result)) //console.log(result))
  .catch(error => console.log("error", error));
