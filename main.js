var kgInput = document.getElementById('kgInput'); 
/*toome välja dokumendi object model elemendid*/
kgInput.addEventListener('input', e /*või event*/ => {
	var kg = event.target.value;
	console.log(kg);
}); /*listening to events*/
