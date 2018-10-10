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
	if (kg == 0){
	output.style.visibility = 'hidden';} else {
	output.style.visibility = 'visible';	
	}
	gramOutput.innerHTML = `${kg * 1000} g`;
	poundOutput.innerHTML = `${kg * 2.2046} lb`;
	untsOutput.innerHTML = `${kg * 35.2739} oz`;
}); 