const container = document.getElementById('container');

let conteudo = ''

const montCArtao = (atleta) => `
    <article>
    <h1>${atleta.nome}</h1>
    <img src=${atleta.imagem}>
    <p>${atleta.detalhes}</p>
    <article>
`; 

/*for(let i=0;i < dados.length; i++){

    let atleta = dados[i];

    container.innerHTML += `
        <h1>${atleta.nome}</h1>
        <img src=${atleta.imagem}>
        <p>${atleta.detalhes}</p>
    `
}    */

dados.forEach( (elemento)=> conteudo += montaCartao(elemento))
container.innerHTML = conteudo;



