import { Operaciones } from "../index";

test("suma sin parametros", () => {
  expect(Operaciones.sum()).toBe(0);
});

test("suma con dos parametros", () => {
  expect(Operaciones.sum(1, 2)).toBe(3);
});

test("suma con parametros variables", () => {
  expect(Operaciones.sum(1, 2, 3, 4)).toBe(10);
});
