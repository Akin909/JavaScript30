
const labels = document.querySelectorAll('label');
const checkboxes = document.querySelectorAll('input')

let lastChecked;

function handleCheck(event){
  let inBetween = false;
  if(event.shiftKey && this.checked){
    checkboxes.forEach((checkbox)=>{
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween
        console.log(inBetween)
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach((checkbox)=>{
  checkbox.addEventListener("click", handleCheck)
})

  //My attempt to solve this which triggers a similar effect but on clicking shift
  //   if (checkbox.checked === true){
  //     let firstPressed = checkbox
  //     Array.from(checkboxes)
  //     .map((checkbox)=>{
  //       window.addEventListener("keydown",(event)=>{
  //         if(event.shiftKey){
  //           let lastPressed = event.target
  //           if(checkbox.checked === false && checkbox.dataset.id > firstPressed.dataset.id && checkbox.dataset.id<lastPressed.dataset.id){
  //             console.log("lastPressed",lastPressed,"firstPressed",firstPressed)
  //               return checkbox.checked = true;
  //           }
  //         }
  //       })
  //     })
  //   }
