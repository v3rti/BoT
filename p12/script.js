
const pressedKeys = [];
const cheatCode = "panzer";


window.addEventListener('keypress', e => {
  if(pressedKeys.length >= cheatCode.length) pressedKeys.shift();
  pressedKeys.push(e.key);

  pressedKeys.join('') === cheatCode ? document.body.style.backgroundColor = "red" : ""
})
