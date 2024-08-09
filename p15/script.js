const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const lStorage = localStorage;
const items = JSON.parse(lStorage.getItem('food')) || []

items.map((item, idx) => {
  itemsList.innerHTML += `<li class="plate"><input type="checkbox" id="item${idx + 1}"><label>${item}</label></li>`
})

const allPlates = document.querySelectorAll('.plate');

allPlates.forEach(plate => {
  plate.addEventListener('click', e => {
    plate.getElementsByTagName('input')[0].checked = !plate.getElementsByTagName('input')[0].checked;
  })
})


addItems.addEventListener('submit', e => {
  e.preventDefault();
  const plateName = addItems.getElementsByTagName('input')[0]
  itemsList.innerHTML += `<li><input type="checkbox"><label>${plateName.value}</label></li>`

  items.push(plateName.value);
  lStorage.setItem('food', JSON.stringify(items));

  plateName.value = "";
})
