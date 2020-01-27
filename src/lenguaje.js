var request = require("request");
var GestorNoticiasNASA = /** @class */ (function () {
    function GestorNoticiasNASA(URL) {
        this.respuesta = null;
        this.URL = "";
        this.URL = URL;
    }
    GestorNoticiasNASA.prototype.recupera = function () {
        var options = {
            method: "GET",
            url: this.URL,
            headers: {}
        };
        this.respuesta = request(options, function (error, response) {
            if (error)
                throw new Error(error);
            // console.log(response.body);
        });
    };
    return GestorNoticiasNASA;
}());
var gestorNASA = new GestorNoticiasNASA("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-13&hd=true");
gestorNASA.recupera();
console.log("-------------------------");
console.log(gestorNASA.respuesta);
