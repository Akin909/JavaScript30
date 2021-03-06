window.SpeechRecognition = window.SpeechRecognition ||
	window.webkitSpeechRecognition;

const output = document.querySelector(".output");
let p = document.createElement('p');
output.appendChild(p);
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (event) => {
	console.log(event.results)
	const transcript = Array.from(event.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('')

	p.textContent = transcript;
	if(event.results[0].isFinal){
		p = document.createElement('p');
		output.appendChild(p);
	}
	console.log('transcript' + ' ' + transcript)
});

recognition.addEventListener('end', recognition.start);

recognition.start();
