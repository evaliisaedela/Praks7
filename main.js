var kgInput = document.getElementById('kgInput'); 
/*toome välja dokumendi object model elemendid*/
var gramOutput = document.getElementById('gramOutput');
kgInput.addEventListener('input', e /*või event*/ => {
	var kg = event.target.value;
	gramOutput.innerHTML = `${kg * 1000} g`;
}); /*listening to events*/