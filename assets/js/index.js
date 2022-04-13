function main(){
    const form = document.querySelector("#form");
    const resultado = document.querySelector("#resultado"); //Exibe o resultado na tela
    const pessoas = []; //array de pessoas  cadastradas
    let i = 0; //posição das pessoas no array


    function pegaDadosPessoa(evento) {
        evento.preventDefault(); //Evita que o evento  padrão aconteça

        //Pega os inputs do formulário
        const nome = document.querySelector("#nome");
        const sobrenome = document.querySelector("#sobrenome");
        const peso = document.querySelector("#peso");
        const altura = document.querySelector("#alt");

        //Guarda os valores em um objeto
        const novaPessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        //Coloca a pessoa criada no array
        pessoas.push(novaPessoa);
        
        //Exibe o resultado na tela
        resultado.innerHTML =  `<h1>Resultado:</h1>`
        resultado.innerHTML += `<h2>Pessoa ${i+1}<h2>`;
        resultado.innerHTML += `<p><span>Nome:</span> ${pessoas[i].nome}</p>`;
        resultado.innerHTML += `<p><span>Sobrenome:</span> ${pessoas[i].sobrenome}</p>`;
        resultado.innerHTML += `<p><span>Peso:</span> ${pessoas[i].peso}</p>`;
        resultado.innerHTML += `<p><span>Altura:</span> ${pessoas[i].altura}</p>`;
        i++; //
    }

    //roda a função quando o usuario clica no botao enviar
    form.addEventListener("submit", pegaDadosPessoa);

    //Outra forma de rodar um evento
    // form.onsubmit = function(evt) {
    //     evt.preventDefault();
    //     console.log(1);
    // };

}
main();
