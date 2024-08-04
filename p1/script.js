// woxeke6951@eixdeal.com

const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio')

keys.forEach(k => {
  // console.log(k.dataset.key)
  const letter = k.querySelector('kbd').textContent;
  const key = k.dataset.key;
  document.addEventListener('keypress', (e) =>{
    if(e.key === letter){
      Array.from(sounds).find((sound) => sound.dataset.key === key).play()
      k.classList.add("playing")
      setTimeout(() => k.classList.remove("playing"), (100));
    }
  })
})
