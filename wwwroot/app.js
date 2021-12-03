
const iniciar = async () =>
{
    const nomeLabel = document.getElementById('nome');
    const sobreNomeLabel = document.getElementById('sobreNome');
    const gitHub = document.querySelector('.btn');
    
    const url = "/QuemSouEu";
    const response = await fetch(url);

    if(response.ok)
    {
        let result = await response.json();
        nomeLabel.innerText  = nomeLabel.innerText + ' ' + result.nome;
        sobreNomeLabel.innerText  = sobreNomeLabel.innerText+ ' ' + result.sobreNome;
        gitHub.attributes.href= result.urlGitHub;

        gitHub.setAttribute('href', result.urlGitHub)

        getImgGit(result.urlGitHub);
    }

    console.log(gitHub);
}

const getImgGit = async (urlParametro) =>
{

    let strinUrl = urlParametro;
    let userName = strinUrl.slice(23)

    console.log(userName)

    const img = document.querySelector('.UrlImg');

    const url = `https://api.github.com/users/${userName}`;
    const response = await fetch(url);

    if(response.ok)
    {
        let result = await response.json();

        img.src = result.avatar_url;
    }
}


document.addEventListener('DOMContentLoaded', iniciar)