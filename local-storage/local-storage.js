const addItems = document.querySelector('form.todo');
const produce = document.querySelector('.produce');
const items = JSON.parse(localStorage.getItem('items'))|| [];



function addItem(event){
  event.preventDefault();
  const text = (this.querySelector('[name=item]').value)

  const item = {
    text,
    done: false
  };
items.push(item);
this.reset();
populateList(items,produce);

localStorage.setItem('items',JSON.stringify(items));
}

function populateList(items = [], produceList){
  produceList.innerHTML = items.map((item,i)=>{
    return `
            <li>
              <input type="checkbox" data-index=${i} id="item${i}" ${item.done?'checked':''}/>
              <label for="item${i}">
                ${item.text}
              </label>
            </li>
            `;
  }).join('');
};

function toggleDone(event){

  if(!event.target.matches('input'))return;//Skips element if it is not an input
  const input = event.target;
  let index = input.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items',JSON.stringify(items));
}

populateList(items,produce)
addItems.addEventListener('submit',addItem);
produce.addEventListener('click',toggleDone)
