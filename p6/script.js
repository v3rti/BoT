const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

fetch(endpoint)
.then(response => response.json())
.then(data => {
  cities.push(...data);
})

const originalLis = suggestions.querySelectorAll('li');

const removeLis = () => {
  const lis = document.querySelectorAll('li');
  lis.forEach((li, idx) => {
    if(idx === 0 || idx === 1){
      li.style.display = "none";
    }else{
      li.remove();
    }
  })
}


const showResult = (data) => {
  removeLis();
  data.forEach((info) => {
    let li = document.createElement('li');
    li.textContent = info.city;
    suggestions.insertAdjacentElement('beforeend', li)
  })
}


input.addEventListener('keyup', (e) => {
  if(e.currentTarget.value === ""){
    removeLis();
    originalLis[0].style.display = "block";
    originalLis[1].style.display = "block";
  }else{
    showResult(cities.filter(d => d.city.includes(input.value)))
  }
})
