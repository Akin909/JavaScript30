
const pressed = [];
const secretCode = "akinzo";

window.addEventListener('keyup',(event)=>{
  // console.log(event.key);
  // pressed.push(event.key);
  pressed.splice(-secretCode.length-1,pressed.length - secretCode.length)
  // console.log(pressed)
  if(pressed.join('').includes(secretCode)){
    console.log("YAAAAAAAY");
    cornify_add();
  }
})
