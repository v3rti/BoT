const controls = document.querySelectorAll('.controls input')

controls.forEach(control => {
  control.addEventListener('mousemove', e => {
    document.body.style.setProperty(`--${e.currentTarget.name}`, `${e.currentTarget.value}${e.currentTarget.dataset.sizing ||''}`)
  })
})
