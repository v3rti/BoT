function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}


const slides = document.querySelectorAll('.slide-in');


window.addEventListener('scroll', e => {
  console.log("scrolling");
})

console.log(slides[0].getBoundingClientRect().top)


slides.forEach(slide => {
  slide.addEventListener('scroll', e => {
    console.log(slide)
  })
})
