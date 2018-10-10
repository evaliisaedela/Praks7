var kgInput = document.getElementById('kgInput'); 
/*toome välja dokumendi object model elemendid*/
var gramOutput = document.getElementById('gramOutput');
var poundOutput = document.getElementById('poundOutput');
var untsOutput = document.getElementById('untsOutput');
var output = document.getElementById('output');

output.style.visibility = 'hidden';


/*listening to events*/
kgInput.addEventListener('input', e /*või event*/ => {
	var kg = event.target.value;
	
	output.style.visibility = (kg === '0') ? 'hidden' : 'visible' ;
	gramOutput.innerHTML = `${kg * 1000} g`;
	poundOutput.innerHTML = `${kg * 2.2046} lb`;
	untsOutput.innerHTML = `${kg * 35.2739} oz`;
}); 