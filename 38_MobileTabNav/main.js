//Fake API
const API = {
    Home: {
        img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        icon: 'fas fa-home'
    },
    Work: {
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        icon: 'fas fa-box'
    },
    Blog: {
        img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
        icon: 'fas fa-book-open'
    },
    'About Us': {
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        icon: 'fas fa-users'
    }
}
const allPage = Object.keys(API)
const container = document.querySelector('.container-inside')
renderingInterface(createIMG, createNAV)

function renderingInterface(IMG, NAV) {
    const adress = IMG()
    console.log(adress)
    NAV(adress)
}
function createIMG() {
    const divIMG = document.createElement('div')
    const allIMG = {}
    divIMG.className = 'image-space';
    for (var keys in API) {
        const img = document.createElement('img');
        if (allPage.indexOf(keys, 0) == 0) {
            img.className = 'show'
        }
        img.src = API[keys].img
        allIMG[keys] = img
        divIMG.appendChild(img)
    }
    container.appendChild(divIMG)
    return allIMG
}
function createNAV(adress) {
    const nav = document.createElement('nav');
    nav.className = 'control-nav';
    for (var value of allPage) {
        const linkPage = document.createElement('a');
        linkPage.className = 'nav-item'
        linkPage.setAttribute('data-value', `${value}`)
        if (allPage.indexOf(value, 0) == 0) {
            linkPage.classList.add('active')
        }
        linkPage.innerHTML = `<i class='${API[`${value}`].icon}'></i>
        <span>${value}</span>`
        linkPage.addEventListener('click', function (e) {
            removeActive()
            linkPage.classList.add('active')
            Object.values(adress).forEach(function (adres) {
                adres.classList.remove('show')
            })
            adress[linkPage.dataset.value].classList.add('show')
        })
        nav.appendChild(linkPage)
    }
    function removeActive() {
        nav.querySelector('.nav-item.active').classList.remove('active')
    }
    container.appendChild(nav)
}

