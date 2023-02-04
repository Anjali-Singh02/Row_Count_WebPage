let count = 0;
let countEl = document.getElementById('count-ele');
let saveEle = document.getElementById('save-ele')
let clearEle = document.getElementById('save-ele')

 function increment() {
    count++;
    countEl.textContent = count;
 }

 function save() {
  let countStr = count + " - "
  saveEle.textContent += countStr

  count = 0;
  countEl.textContent = count;
  console.log(count);
 }
 