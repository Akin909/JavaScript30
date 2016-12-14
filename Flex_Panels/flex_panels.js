const panels = document.querySelectorAll(".flex-panel")

panels.forEach((panel) =>{
    console.log(panel)
   panel.addEventListener("click",makeActive)
   //could add functionality to animate panes on mouse in and out
  //  panel.addEventListener("mouseout",makeInactive)
   panel.addEventListener("transitionend",function(event){
     if(event.propertyName.includes("flex")){
     panel.classList.toggle("open-active")
   }else{}
   });
})

function makeActive(){
  this.classList.toggle("open");
}
//could add functionality to animate panes on mouse in and out
// function makeInactive(){
//   this.classList.remove("open","open-active")
// }
