var kgInput = document.getElementById('kgInput'); 
/*toome välja dokumendi object model elemendid*/
var gramOutput = document.getElementById('gramOutput');
var poundOutput = document.getElementById('poundOutput');
var untsOutput = document.getElementById('untsOutput');
kgInput.addEventListener('input', e /*või event*/ => {
	var kg = event.target.value;
	gramOutput.innerHTML = `${kg * 1000} g`;
	poundOutput.innerHTML = `${kg * 2.2046} lb`;
	untsOutput.innerHTML = `${kg * 35.2739} oz`;
}); /*listening to events*/