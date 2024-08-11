const ul = document.querySelector('#bands');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const keywords = ['The', 'A', 'An'];

bands.sort((a, b) => {
  const tempStrA = keywords.includes(a.split(' ')[0]) ? a.split(' ').slice(1).join(' ') : a
  const tempStrB = keywords.includes(b.split(' ')[0]) ? b.split(' ').slice(1).join(' ') : b
  return tempStrA.localeCompare(tempStrB);
})

bands.map(band => {
  ul.innerHTML += `<li>${band}</li>`
})
