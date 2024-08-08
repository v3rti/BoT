const inputCb = document.querySelectorAll('input[type=checkbox]');

let lastChecked = 0;
let endInp = 0;
let isShiftPressed = false;

document.body.addEventListener('keydown', e => {
  e.shiftKey ? isShiftPressed = true : isShiftPressed = false;
  console.log(isShiftPressed)
})

inputCb.forEach((inp, idx) => {
  inp.addEventListener('change', a => {
    if(isShiftPressed){
      endInp = idx;
      if(lastChecked > endInp){
        const tmpEndInp = endInp;
        endInp = lastChecked;
        lastChecked = tmpEndInp;
      }
      for(let i = lastChecked; i <= endInp; i++){
        inputCb[i].checked = true;
      }
    }else{
      lastChecked = idx;
      console.log('Last checked is: ', lastChecked);
    }
  })
})
