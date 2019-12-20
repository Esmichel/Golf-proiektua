var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 2000,
  cx = cw / 2;
var ch = canvas.height = 1000,
  cy = ch / 2;

var arrastrar = false;
var lanzar = false;
var gravedad = .5;
var rebote = -.5; 
var dx, dy;
var m = {
  x: cx,
  y: cy
}; 

function Pelota(r) {
  this.r = 10;
  this.x = 1.2 * this.r;
  this.y = ch - this.r;
  this.inicial_x = this.x;
  this.inicial_y = this.y;
  this.vx = 0;
  this.vy = 0;
  this.color = "white";
}
Pelota.prototype.dibujar = function() {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  ctx.fill();
  if (ctx.isPointInPath(m.x, m.y)) {
    canvas.style.cursor = "pointer";
  } else {
    canvas.style.cursor = "default";
  }
}

Pelota.prototype.arrastrar = function(m) {
  this.x = m.x + dx;
  this.y = m.y + dy;
  
  this.colisionParedes();
  this.vx = this.x - this.inicial_x;
  this.vy = this.y - this.inicial_y;
  this.inicial_x = this.x;
  this.inicial_y = this.y;
}

Pelota.prototype.lanzar = function(m) {
  this.vy += gravedad;
  this.x += this.vx;
  this.y += this.vy;

  this.colisionParedes();

}

Pelota.prototype.colisionParedes = function() {
  if (this.x > cw - this.r) {
    this.x = cw - this.r;
    this.vx *= rebote;

  } else if (this.x < this.r) {
    this.x = this.r;
    this.vx *= rebote;
  }
  if (this.y > ch - this.r) {
    this.y = ch - this.r;
    this.vy *= rebote;

  } else if (this.y < this.r) {
    this.y = this.r
    this.vy *= rebote;
  }
  if (this.x < 300) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 400) {
    this.y = 400
    this.vy *= rebote;
  }
  if(this.y == 400)
    this.vx -= this.vx*0.05;
  }
  if (this.x > 300 && this.x < 550) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 400+((this.x-300)*1.3)) {
    this.y = 400+((this.x-300)*1.4);
    this.vy *= rebote;
    this.vx *= rebote;

    }
   
  }

  if (this.x > 550 && this.x<800 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 780) {
    this.y = 780
    this.vy *= rebote;
  }
  if(this.y == 780)
    this.vx -= this.vx*0.05;

  }
  if (this.x > 800 && this.x < 990) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 780-((this.x-800)*0.68)) {
    this.y = 780-((this.x-800)*0.68);
    this.vy *= rebote;
    this.vx *= rebote;

    }

  }
  if (this.x > 990 && this.x<1200 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 630) {
    this.y = 630
    this.vy *= rebote;
  }
   if(this.y == 630)
    this.vx -= this.vx*0.05;


  }
  if (this.x > 1200 && this.x < 1350) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 630+((this.x-1200)*0.87)) {
    this.y = 630+((this.x-1200)*0.87);
    this.vy *= rebote;
    this.vx *= rebote;

    }
  }
   if (this.x > 1350 && this.x < 1500 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 770) {
    this.y = 770;
    this.vy *= rebote;
  }
   if(this.y == 770)
    this.vx -= this.vx*0.05;
}
if (this.x > 1500 && this.x < 1750) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 770-((this.x-1500)*1.2)) {
    this.y = 770-((this.x-1500)*1.2);
    this.vy *= rebote;
    this.vx *= -.05;

    }
  }
  if (this.x > 1750 && this.x < 1870 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 450) {
    this.y = 450;
    this.vy *= rebote;
  }
  if(this.y == 450)
    this.vx -= this.vx*0.05;
}
 if (this.x > 1870 && this.x < 1910 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 530) {
    this.y = 530;
    this.vy *= rebote;
  }
  if(this.y == 530)
    this.vx -= this.vx*0.05;
}
if (this.x > 1910 && this.x < 2000 ) {

    if (this.y <  this.r) {
    this.y = this.r;
    this.vy *= rebote;

  } else if (this.y > 450) {
    this.y = 450;
    this.vy *= rebote;
  }
  if(this.y == 450)
    this.vx -= this.vx*0.05;
}
if (this.x > 1870  && this.x < 1910 && this.y==530 ) {

   alert('irabazi duzu');
}
}


// dibuja una nueva pelota
var pelota = new Pelota(25);

function Animacion() {
  elId = window.requestAnimationFrame(Animacion);
  if (arrastrar) {
    pelota.arrastrar(m);
  }
  if (lanzar) {
    pelota.lanzar(m);
  }
  // limpia el canvas
  ctx.clearRect(0, 0, cw, ch);
  //dibuja la pelota
  pelota.dibujar();
}
Animacion();

// EVENTOS

canvas.addEventListener("mousedown", function(evt) {
  m = oMousePos(canvas, evt);
  ctx.clearRect(0, 0, cw, ch);
  // porque no hacemos clic en el centro de la pelota
  // tenemos que calcular la distancia entre el centro y el ratón
  dx = pelota.x - m.x;
  dy = pelota.y - m.y;
  pelota.dibujar();
  // Si hemos hecho clic en la pelota, podemos arrastrar
  if (ctx.isPointInPath(m.x, m.y)) {
    arrastrar = true;
    lanzar = false;
  }
}, false);

canvas.addEventListener("mousemove", function(evt) {
  ctx.clearRect(0, 0, cw, ch);
  pelota.dibujar();
  m = oMousePos(canvas, evt);

}, false);

canvas.addEventListener("mouseup", function(evt) {
  arrastrar = false;
  lanzar = true;
}, false);
canvas.addEventListener("mouseout", function(evt) {
  arrastrar = false;
  lanzar = true;
}, false);

window.addEventListener("load", function() {
  pelota.dibujar();
}, false);

function oMousePos(canvas, evt) { // detecta la posición del ratón
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}