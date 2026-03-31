const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*2 + 1;
    this.speedX = Math.random()*0.5 - 0.25;
    this.speedY = Math.random()*0.5 - 0.25;
    this.color = `hsl(${Math.random()*360}, 100%, 70%)`;
  }
  update() { this.x += this.speedX; this.y += this.speedY; if(this.x>canvas.width)this.x=0; if(this.x<0)this.x=canvas.width; if(this.y>canvas.height)this.y=0; if(this.y<0)this.y=canvas.height; }
  draw() { ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
}

let particlesArray = [];
for(let i=0;i<300;i++){ particlesArray.push(new Particle()); }

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{ p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();