const addItems = document.querySelector('form.todo');
const produce = document.querySelector('.produce');
const items = [];

addItems.addEventListener('submit',addItem);
function addItem(event){
  event.preventDefault();
  const text = (this.querySelector('[name=item]').value)

  const item = {
    text,
    done: false
  };
items.push(item);
this.reset();
populateList(items,produce)
console.table(items)
}

function populateList(items = [], produceList){
  produceList.innerHTML = items.map((item,i)=>{
    return `
            <li>
              <input type="checkbox" data-index=${i} id="item${i}" ${item.done?'checked':''}/>
              <label for="items${i}">
                ${item.text}
              </label>
            </li>
            `;
  }).join('');
}
