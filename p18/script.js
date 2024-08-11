const lis = document.querySelectorAll('li');

let total = Array.from(lis).reduce((acc, li) => {
  return acc += parseInt(li.dataset.time.split(':')[0]) * 60 + parseInt(li.dataset.time.split(':')[1])
}, 0)

const hours = Math.floor(total / 3600);
total = total % 3600

const minutes = Math.floor(total / 60);
total = total % 60;


console.log(hours, minutes, total);
