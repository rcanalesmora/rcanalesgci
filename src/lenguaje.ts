let request = require("request");

class GestorNoticiasNASA {
  peticion: any = null;
  respuesta: any = "todavía Nada";
  URL: string = "";

  constructor(URL: string) {
    this.URL = URL;
  }

  anima = (error: any, response: any) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log("----------- Dentro de la función --------------");
      console.log(response.body);
      this.respEst = response.body;

      console.log("----------- Estructura --------------");
      console.log(this.respEst);
    }
  };

  recupera() {
    //creamos estructura
    let options = {
      method: "GET",
      url: this.URL,
      headers: {}
    };

    this.peticion = request(options, this.anima);
    console.log("----------- Despues de la función --------------");
    console.log(this.respuesta);
  }
}

let gestorNASA = new GestorNoticiasNASA(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true"
);

gestorNASA.recupera();
console.log("----------- Fuera de la función--------------");
console.log(gestorNASA.respuesta);

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(new Date()); //It's you code
  }, (i + i + 1) * 1000);
}

console.log("-----------final del retraso asincrono --------------");
console.log(gestorNASA.respuesta);
