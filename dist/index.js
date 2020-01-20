"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = /** @class */ (function () {
    function Operaciones() {
    }
    Operaciones.sum = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return a.reduce(function (acc, val) { return acc + val; }, 0);
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
var a = 10;
var b = 20;
console.log("hola mundo");
