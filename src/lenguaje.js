var request = require("request");
var GestorNoticiasNASA = /** @class */ (function () {
    function GestorNoticiasNASA(URL) {
        this.peticion = null;
        this.URL = "";
        this.anima = function (error, response) {
            if (error) {
                throw new Error(error);
            }
            else {
                var objeto = JSON.parse(response.body);
                console.log(objeto.copyright);
            }
        };
        this.URL = URL;
    }
    GestorNoticiasNASA.prototype.recupera = function () {
        //creamos estructura
        var options = {
            method: "GET",
            url: this.URL,
            headers: {}
        };
        this.peticion = request(options, this.anima);
    };
    return GestorNoticiasNASA;
}());
var gestorNASA = new GestorNoticiasNASA("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true");
gestorNASA.recupera();
