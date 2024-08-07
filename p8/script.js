const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


document.addEventListener('mousemove', (e) => {
  context.fillStyle = "#" + Math.floor(Math.random()*(e.clientX * e.clientY)).toString(16);
  context.beginPath();
  context.arc(e.clientX, e.clientY, 30, 0, 2 * Math.PI)
  context.fill();
})
