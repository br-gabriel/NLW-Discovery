const linksSocialMedia = {
    github: 'br-gabriel',
    youtube: 'channel/UC2m6IzINT451X9IsL147Beg',
    facebook: 'profile.php?id=100010710379241',
    instagram: 'gafeitosa_',
    twitter: ''
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
        })
}

getGithubProfileInfos()


//Trocar o botão do twitter para o linkedIn e excluir o botão de youtube
//Adicionar a logo do do while na versão desktop e alterar a apresentação no modo desktop
//Adicionar o icone da rocketseat
//Adicionar alguma coisa diferente no crachá (Selo rodando no prop eixo)
//Adicionar o estado hover nos links