const ul = document.querySelector('#bands');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const keywords = ['The', 'A', 'An'];

const tempStr = word => keywords.includes(word.split(' ')[0]) ? word.split(' ').slice(1).join(' ') : word;

bands.sort((a, b) => tempStr(a).localeCompare(tempStr(b)))

bands.map(band => {
  ul.innerHTML += `<li>${band}</li>`
})
