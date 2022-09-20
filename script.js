const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
const uf = /^[A-Z]{2}$/;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	nameValidate();
	emailValidate();
	foneValidate();
	cepValidate();
	cityValidate()
	ufValidate();
	

});

function setError(index){
	campos[index].style.border = '2px solid red';
	spans[index].style.display = 'block';
}

function removeError(index){
	campos[index].style.border = '';
	spans[index].style.display = 'none';
}

function nameValidate(){
	if(campos[0].value == "" || campos[0].value.length < 3 || !/^[A-Z]/.test(campos[0].value)) 
	{
		setError(0);
	}
    else 
	{
		removeError(0);
	}
}

function emailValidate(){
	if(campos[1].value == "" || !emailRegex.test(campos[1].value)) 
	{
		setError(1);
	}
    else 
	{
		removeError(1);
	}
}

function foneValidate(){
	if(!/^[0-9]{11}$/.test(campos[2].value)) 
	{
		setError(2);
	}
    else 
	{
		removeError(2);
	}
}

function cepValidate(){
	if(!/^[0-9]{5}[-][0-9]{3}$/.test(campos[3].value)) 
	{
		setError(3);
	}
    else 
	{
		removeError(3);
	}
}

function cityValidate(){
	if(campos[4].value == "" || campos[4].value.length < 3 || !/^[A-Z]/.test(campos[4].value))  
	{
		setError(4);
	}
    else 
	{
		removeError(4);
	}
}

function ufValidate(){
	if(!uf.test(campos[5].value)) 
	{
		setError(5);
	}
    else 
	{
		removeError(5);
	}
}


