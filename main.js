const linksSocialMedia = {
    github: 'br-gabriel',
    youtube: 'channel/UC2m6IzINT451X9IsL147Beg',
    facebook: 'profile.php?id=100010710379241',
    instagram: 'gafeitosa_',
    linkedin: 'in/gabriel-feitosa-3b9029193/'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos () {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            user_profile.href = data.html_url
            userAvatar.src = data.avatar_url
            userLogin.textContent = data.login
            title.textContent = `${data.name} - DoWhile 2021`
        })
}

getGithubProfileInfos()


//Adições
//Adicionar a logo do do while na versão desktop - com clamp (.png)
//Animação no selo da rocketseat


//Testes
//Testar o encaixe da faixa em várias telas diferentes
//:hover nos links
//title não está atualizando
//Ajustar os media queries - Altura do conteudo dentro do cracha na versão desktop e quando for mobile mudar o modo de visualização

//Ajustes
//Alterar a apresentação no modo desktop (adicionar os gradientes e a div que 'segura o cartão')
//Ajustar o tamanho da versão mobile (ficou grande no meu celular) 100 vh 100 vw