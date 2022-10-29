//let's get started

//styling the text Judul
const nama = document.querySelector('h1');
const huruf = [...nama.textContent].map ( (h) => {
	return `<span>${h}</span>`
	}).join('');

nama.innerHTML = huruf;

//Self contact info

function email(){
	alert('muhamadsyamsu6@gmail.com');
}
function instagram(){
	alert('@syamsunuryaman');
}
function youTube(){
	alert('Britishengfeast.');
}
function github(){
	alert('Syamsu7');
}
