const slider = document.querySelector('.slider');
let isDown = false, startX, scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active'); });
slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active'); });
slider.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll
setInterval(() => { slider.scrollBy({ left:1, behavior:'smooth' }); }, 50);

// Supernova interactive sur bouton
const listenBtn = document.getElementById('listen-btn');
listenBtn.addEventListener('click', e => {
  e.preventDefault();
  for(let i=0;i<30;i++){ createStarTrail(e.pageX, e.pageY); }
});
function createStarTrail(x,y){
  const star = document.createElement('div');
  star.className='star-trail';
  star.style.left=x+'px';
  star.style.top=y+'px';
  document.body.appendChild(star);
  setTimeout(()=>{ star.remove(); },1000);
}