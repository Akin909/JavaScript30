
//create two node lists of all audo and drums then use for each to add mouseover function and play on mouseover
let audio = document.querySelectorAll("audio")
let drums = document.querySelectorAll("div.drums")

audio.forEach(function(sound,i){
  drums[i].onmouseover = function(){
      sound.currentTime = 0;
      return sound.play();
    }
});

window.addEventListener("keydown",function(event){
//Using keydown event object find keyCode use it to find specific audio
  let drums = document.querySelectorAll("div.drums");
  drums
  let key = event.keyCode;
  let audio = document.querySelector(`audio[data-key="${key}"]`)
  if(!audio){return ;}
  let drum = audio.parentElement;
  drum.className += " playing"
  window.addEventListener("keyup",function(event){
    drum.className = "drums"
  })
  audio.currentTime = 0;//set to rewind to start
  audio.play();
})
