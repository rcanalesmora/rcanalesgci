"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test("suma sin parametros", function () {
    expect(index_1.Operaciones.sum()).toBe(0);
});
test("suma con dos parametros", function () {
    expect(index_1.Operaciones.sum(1, 2)).toBe(3);
});
test("suma con parametros variables", function () {
    expect(index_1.Operaciones.sum(1, 2, 3, 4)).toBe(10);
});
