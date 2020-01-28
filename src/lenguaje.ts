let request = require("request");

interface INoticiaNasa {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

class GestorNoticiasNASA {
  peticion: any = null;
  URL: string = "";

  constructor(URL: string) {
    this.URL = URL;
  }

  anima = (error: any, response: any) => {
    if (error) {
      throw new Error(error);
    } else {
      let objeto: INoticiaNasa = JSON.parse(response.body);
      console.log(objeto.copyright);
    }
  };

  recupera() {
    let options = { method: "GET", url: this.URL, headers: {} };

    this.peticion = request(options, this.anima);
  }
}

let gestorNASA = new GestorNoticiasNASA(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true"
);

gestorNASA.recupera();
