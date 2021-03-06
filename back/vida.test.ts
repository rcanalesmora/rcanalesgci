let array1: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let array2: number[][] = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let array3: number[][] = [
  [1, 1, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let array4: number[][] = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, 0]
];

let array5: number[][] = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 0]
];
let array6: number[][] = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
];

function dimeVecinosFullScan(
  columna: number,
  fila: number,
  matriz: number[][]
): number {
  let contador: number = 0;
  let distanciaX: number = 0;
  let distanciaY: number = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      distanciaX = Math.abs(columna - j);
      distanciaY = Math.abs(fila - i);

      if (i == fila && j == columna) {
        // ignoramos
      } else if (distanciaX <= 1 && distanciaY <= 1) {
        contador += matriz[i][j];
      }
    }
  }
  return contador;
}

function tamaArray2D(matriz: number[][]): { filas: number; columnas: number } {
  return { filas: matriz.length, columnas: matriz[0].length };
}

function dimeVecinosSesgado(
  tama: { filas: number; columnas: number },
  columna: number,
  fila: number,
  matriz: number[][]
): number {
  let filaInicio: number = fila;
  let filaFin: number = fila;
  let columnaInicio: number = columna;
  let columnaFin: number = columna;

  let contador: number = 0;

  if (fila > 0) {
    filaInicio--;
  }
  if (fila < tama.filas - 1) {
    filaFin++;
  }

  if (columna > 0) {
    columnaInicio--;
  }
  if (columna < tama.columnas - 1) {
    columnaFin++;
  }

  for (let a = filaInicio; a <= filaFin; a++) {
    for (let b = columnaInicio; b <= columnaFin; b++) {
      if (fila == a && columna == b) {
        // ignorar la propia casilla
      } else {
        contador += matriz[a][b];
      }
    }
  }

  return contador;
}

function dimeVecinos(
  columna: number,
  fila: number,
  matriz: number[][]
): number {
  let tama = tamaArray2D(matriz);

  return dimeVecinosSesgado(tama, columna, fila, matriz);
}

test("saber el numero de vivas alrededor", () => {
  /*
  expect(dimeVecinosFullScan(0, 0, array1)).toBe(0);
  expect(dimeVecinosFullScan(0, 0, array2)).toBe(0);
  expect(dimeVecinosFullScan(0, 1, array2)).toBe(1);
  expect(dimeVecinosFullScan(0, 2, array2)).toBe(0);
  expect(dimeVecinosFullScan(1, 1, array3)).toBe(2);
  expect(dimeVecinosFullScan(1, 1, array4)).toBe(3);
  expect(dimeVecinosFullScan(0, 0, array4)).toBe(2);
  expect(dimeVecinosFullScan(0, 0, array4)).toBe(2);
  expect(dimeVecinosFullScan(1, 2, array4)).toBe(1);
  expect(dimeVecinosFullScan(1, 1, array6)).toBe(5);
  expect(dimeVecinosFullScan(2, 2, array6)).toBe(3);
  */

  expect(dimeVecinos(0, 0, array1)).toBe(0);
  expect(dimeVecinos(0, 0, array2)).toBe(0);
  expect(dimeVecinos(0, 1, array2)).toBe(1);
  expect(dimeVecinos(0, 2, array2)).toBe(0);
  expect(dimeVecinos(1, 1, array3)).toBe(2);
  expect(dimeVecinos(1, 1, array4)).toBe(3);
  expect(dimeVecinos(0, 0, array4)).toBe(2);
  expect(dimeVecinos(0, 0, array4)).toBe(2);
  expect(dimeVecinos(1, 2, array4)).toBe(1);
  expect(dimeVecinos(1, 1, array6)).toBe(5);
  expect(dimeVecinos(2, 2, array6)).toBe(3);
});

test("nace si tienes tres vecinas vivas", () => {});

test("sigue viva si tiene 2 o tres vecinas vivas", () => {});

test("muere si tiene más de tres vecinas vivas", () => {});
