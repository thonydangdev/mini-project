const APIURL = 'https://api.github.com/users/'
const form = document.querySelector('#user-form')
const main = document.querySelector('.main')
form.addEventListener('submit', async function (e) {
    main.innerHTML = ''
    e.preventDefault();
    try {
        const searchTerm = form.elements.search.value
        const { data } = await axios.get(APIURL + searchTerm)
        const repos = await getRepos(searchTerm)
        createCardUser(data, repos)

        form.elements.search.value = ''

    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }

})
async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created')
        return data
    } catch (error) {
        createErrorCard('Problem fetching repos')
    }
}
function createCardUser(data, repos) {
    const card = document.createElement('div')
    card.className = 'card';
    card.innerHTML = `
    <div class="user__avatar">
    <div class="user__img" style = "background-image:url('${data.avatar_url}');"></div>
    </div>
    <div class="user__info">
    <div class="user__item user__name">${data.name}</div>
    <div class="user__item user__professor">${data.bio}</div>
    <div class="user__item user__interactive">
        <div class="user__interitem">
            ${data.followers}<span class="highlight">Followers</span>s
        </div>
        <div class="user__interitem">
            ${data.following} <span class="highlight">Following</span>
        </div>
        <div class="user__interitem">
            ${data.public_repos} <span class="highlight">Repos</span>
        </div>
    </div>
    </div>
    `
    const Info = card.lastElementChild
    addReposToCard(repos, Info)
    main.append(card)
}
function addReposToCard(data, Info) {
    const boxRepos = document.createElement('div')
    boxRepos.className = 'user__repos';
    data.slice(0, 5).forEach(repo => {
        const repoLink = document.createElement('a')
        repoLink.className = 'tag__link'
        repoLink.href = repo.html_url
        repoLink.innerText = repo.name
        repoLink.target = '_blank'
        boxRepos.appendChild(repoLink)
    })
    Info.appendChild(boxRepos)


}
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}
