const searchUser = document.querySelector('.searchUser');
const resultUser = document.querySelector('.resultUser');
let listUsers = []
rendering()
searchUser.addEventListener('input', (e) => filterData(e.target.value))
async function rendering(value = "") {
    let newData = await getData()
    resultUser.innerHTML = '';
    newData.results.forEach(function (user) {
        const userDiv = document.createElement('div');
        listUsers.push(userDiv)
        userDiv.className = 'user';
        userDiv.innerHTML = ` <img src=${user.picture.large} alt="">
        <div class="user-info">
            <h4 class="user-name">${user.name.first} ${user.name.last}</h4>
            <p class="user-address">${user.location.city}, ${user.location.country}</p>
        </div>`
        resultUser.appendChild(userDiv)
    })
    console.log(listUsers)
}
async function getData(value = '') {
    var { data } = await axios.get('https://randomuser.me/api?results=50')
    return data
}
function filterData(searchTerm) {
    listUsers.forEach(item => {
        if (item.lastChild.firstElementChild.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')

        }
    })
}

