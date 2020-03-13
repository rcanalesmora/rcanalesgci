class JuegoDeLaVida {
  timer: any;
  tama = { x: 0, y: 0 };
  dim = { x: 0, y: 0 };
  color: string = "FFFFFF";
  tamaCuadrado: number = 10;
  matriz: number[][];

  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.tama.x = ctx.canvas.width;
    this.tama.y = ctx.canvas.height;

    this.dim.x = this.tama.x / this.tamaCuadrado;
    this.dim.y = this.tama.y / this.tamaCuadrado;

    this.matriz = new Array<Array<number>>();

    for (let i = 0; i < this.dim.x; i++) {
      let fila: number[] = new Array<number>();

      for (let j = 0; j < this.dim.y; j++) {
        fila.push( Math.round (Math.random() * 2 ) );
      }

      this.matriz.push(fila);
    }

    console.log(this.matriz);
  }

  arranca(documento: Document): void {
    console.log("Arrancamos juego");
  }

  procesa( x: number, y: number, array : number[][])
  {

  }

  nuevaGeneracion() {
    
    for (let i = 0; i < this.dim.y; i++) {
      for (let j = 0; j < this.dim.x; j++) {     
          this.procesa(i,j,this.matriz);
      }
    }

  }

  pintaCasilla(x: number, y: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * this.tamaCuadrado + 1,
      y * this.tamaCuadrado + 1,
      this.tamaCuadrado - 2,
      this.tamaCuadrado - 2
    );
  }

  pinta() {
    this.ctx.fillStyle = "#0000FF";
    this.ctx.fillRect(0, 0, this.tama.x, this.tama.y);

    for (let i = 0; i < this.dim.y; i++) {
      for (let j = 0; j < this.dim.x; j++) {
       
        if (this.matriz[i][j] == 0) {
          this.color = "#FFFFFF";
        } else if (this.matriz[i][j] == 1) {
          this.color = "#000000";
        } else {
          this.color = "#00FF000";
        }

        this.pintaCasilla(i, j, this.color);
      }
    }
  }

  anima = () => {
    console.log("Animamos el juego");
    this.nuevaGeneracion();
    this.pinta();
  };
}

window.addEventListener("load", main);

function main() {
  let juego: JuegoDeLaVida;

  let micanvas: HTMLCanvasElement = document.getElementById(
    "areajuego"
  ) as HTMLCanvasElement;

  let ctx: CanvasRenderingContext2D | null = micanvas.getContext("2d");

  if (ctx == null) {
    console.log("Imposible recuperar contexto pintado");
    return;
  }

  juego = new JuegoDeLaVida(ctx);
  // juego.creaElementos();
  juego.arranca(document);
  juego.timer = setInterval(juego.anima, 1000);
}
