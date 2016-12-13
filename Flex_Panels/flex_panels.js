const panels = document.querySelectorAll(".flex-panel")

console.log(panels)

panels.forEach((panel) =>{
    console.log(panel)
   panel.addEventListener("mouseover",makeActive)
   panel.addEventListener("mouseout",makeInactive)

})

function makeActive(){
  this.className += " open open-active"
}
function makeInactive(){
  this.className = this.className.replace("open open-active","")
}
