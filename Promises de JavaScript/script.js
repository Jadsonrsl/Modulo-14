// Fetch request na API do GitHub
// Fetch API

const userName = 'Jadsonrsl';

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})

.then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
})

.then((data) => {
    mostrar = (document.querySelector(".resposta").innerHTML = `O nome do usuário é: ${data.name}, mora em ${data.location} e trabalha na ${data.company}`);    
}).catch((err) => {
    mostrar = (document.querySelector(".resposta").innerHTML = `Houve algum erro: ${err}`);    
});

function vermelho() {
    teste = document.getElementById("teste").style.color = "red";
}

function azul() {
    teste = document.getElementById("teste").style.color = "blue";
}


