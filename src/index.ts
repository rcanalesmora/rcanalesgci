export class Operaciones {
  static sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);
}

console.log("hola mundo");
