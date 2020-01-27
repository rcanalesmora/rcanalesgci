let request = require("request");

class GestorNoticiasNASA {
  respuesta: any = null;
  URL: string = "";

  constructor(URL: string) {
    this.URL = URL;
  }

  recupera() {
    let options = {
      method: "GET",
      url: this.URL,
      headers: {}
    };

    this.respuesta = request(options, function(error: any, response: any) {
      if (error) throw new Error(error);

      // console.log(response.body);
    });
  }
}

let gestorNASA = new GestorNoticiasNASA(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true"
);
gestorNASA.recupera();
console.log("-------------------------");
console.log(gestorNASA.respuesta);
