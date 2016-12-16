
const labels = document.querySelectorAll('label');
const checkboxes = document.querySelectorAll('input')
console.log(checkboxes)




checkboxes.forEach((checkbox, nextbox)=>{
  checkbox.addEventListener("click", (event)=>{
    if (checkbox.checked === true){
      let done = checkbox
      Array.from(checkboxes)
      .map((checkbox)=>{
        if(checkbox.checked === false && parseInt(checkbox.dataset.id)<done.dataset.id){
          return checkbox.checked = true;
        }
      })
    }
  })
})

// document.addEventListener("keydown",strikeThrough);

// function strikeThrough(event){
//   if (event.keyCode === 16){
//   labels.forEach((label)=>{
//     label.addEventListener('keydown',(event)=>{
//       console.log("hello they clicked a label")
//        const checked = document.querySelectorAll('input[class="todo"]:checked')
//        checked.forEach((checkbox)=>{
//          console.log(parseInt(checked.dataset.id))
//          const todo = document.querySelectorAll('input');
        //  todo.forEach((item)=>{
        //    if(parseInt(todo.dataset.id) < parseInt(checkbox.dataset.id)){
        //      console.log("im less than checked box")
        //    }
        //  })
//        })
//       })
//     })
//   }
// };
