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
        })
}

getGithubProfileInfos()


//Adicionar a logo do do while na versão desktop e alterar a apresentação no modo desktop
//Adicionar alguma coisa diferente no crachá (Selo rodando no prop eixo)
//Adicionar o estado hover nos links
//Alterar o nome do usuário na aba de acordo com o perfil do github