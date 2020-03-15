class JuegoDeLaVida {
    timer: any;
    tama = { anchoCanvas: 0, altoCanvas: 0 };
    dim = { columnas: 0, filas: 0 };
    color: string = "FFFFFF";
    tamaCuadrado: number = 5;
    matriz: number[][];
    ctx: CanvasRenderingContext2D;
  
    constructor(ctx: CanvasRenderingContext2D) {
      this.ctx = ctx;
      this.tama.anchoCanvas = ctx.canvas.width;
      this.tama.altoCanvas = ctx.canvas.height;
  
      this.dim.columnas = this.tama.anchoCanvas / this.tamaCuadrado;
      this.dim.filas = this.tama.altoCanvas / this.tamaCuadrado;
  
      this.matriz = new Array<Array<number>>();
  
      for (let fila = 0; fila < this.dim.filas; fila++) {
        let filaArray: number[] = new Array<number>();
  
        for (let columna = 0; columna < this.dim.columnas; columna++) {
          filaArray.push(Math.round(Math.random() * 2));
        }
  
        this.matriz.push(filaArray);
      }
    }
  
    dimeVecinos(columna: number, fila: number, matriz: number[][]): number {
      let filaInicio: number = fila;
      let filaFin: number = fila;
      let columnaInicio: number = columna;
      let columnaFin: number = columna;
  
      let contador: number = 0;
  
      if (fila > 0) {
        filaInicio--;
      }
      if (fila < this.dim.filas - 1) {
        filaFin++;
      }
  
      if (columna > 0) {
        columnaInicio--;
      }
      if (columna < this.dim.columnas - 1) {
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
  
    creaMatrizVacia(): number[][] {
      let matrizAux: number[][] = new Array<Array<number>>();
  
      for (let fila = 0; fila < this.dim.filas; fila++) {
        let filaArray: number[] = new Array<number>();
  
        for (let columna = 0; columna < this.dim.columnas; columna++) {
          filaArray.push(0);
        }
  
        matrizAux.push(filaArray);
      }
      return matrizAux;
    }
  
    nuevaGeneracion() {
      let matrizAux: number[][] = this.creaMatrizVacia();
  
      for (let fila = 0; fila < this.dim.filas; fila++) {
        for (let columna = 0; columna < this.dim.columnas; columna++) {
          let vecinos: number = this.dimeVecinos(columna, fila, this.matriz);
  
          if (this.matriz[fila][columna] == 0 && vecinos == 3) {
            matrizAux[fila][columna] = 1;
          } else if (
            this.matriz[fila][columna] == 1 &&
            (vecinos == 2 || vecinos == 3)
          ) {
            matrizAux[fila][columna] = 1;
          } else {
            matrizAux[fila][columna] = 0;
          }
        }
      }
  
      this.matriz = matrizAux;
    }
  
    pintaCasilla(columna: number, fila: number, color: string) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(
        columna * this.tamaCuadrado + 1,
        fila * this.tamaCuadrado + 1,
        this.tamaCuadrado - 2,
        this.tamaCuadrado - 2
      );
    }
  
    pinta() {
      this.ctx.fillStyle = "#0000FF";
      this.ctx.fillRect(0, 0, this.tama.anchoCanvas, this.tama.altoCanvas);
  
      for (let fila = 0; fila < this.dim.filas; fila++) {
        for (let columna = 0; columna < this.dim.columnas; columna++) {
          if (this.matriz[fila][columna] == 0) {
            this.color = "#FFFFFF";
          } else if (this.matriz[fila][columna] == 1) {
            this.color = "#000000";
          } else {
            this.color = "#00FF000";
          }
  
          this.pintaCasilla(fila, columna, this.color);
        }
      }
    }
  
    anima = () => {
      console.log("Animamos el juego");
      this.nuevaGeneracion();
      this.pinta();
    };
  }
  
  window.addEventListener("load", mainvida);
  
  function mainvida() {
    let juego: JuegoDeLaVidaTDD;
  
    let micanvas: HTMLCanvasElement = document.getElementById(
      "areajuego"
    ) as HTMLCanvasElement;
  
    let ctx: CanvasRenderingContext2D | null = micanvas.getContext("2d");
  
    if (ctx == null) {
      console.log("Imposible recuperar contexto pintado");
      return;
    }
  
    juego = new JuegoDeLaVidaTDD(ctx);
    juego.timer = setInterval(juego.anima, 100);
  }
  