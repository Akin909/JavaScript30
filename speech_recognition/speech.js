 window.SpeechRecognition = window.SpeechRecognition
|| window.webkitSpeechRecognition;

const output = document.querySelector(".output");

const recognition = new SpeechRecognition();

recognition.interimResults = true;
console.log(recognition)
// output += `<p>${}</p>`;
recognition.addEventListener('results',(event)=>{
  console.log('hello')
});
recognition.start();
