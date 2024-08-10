const heading = document.querySelector('h1');


let mousePos = 0;

window.addEventListener('mousemove', e => {
  const val1 = e.clientX;
  const val2 = e.clientY;

  heading.style.setProperty('text-shadow', `${val1 * 2 - window.innerWidth}px ${val2 * 2 - window.innerHeight}px 0 rgba(0,0,0,1)`)

})
