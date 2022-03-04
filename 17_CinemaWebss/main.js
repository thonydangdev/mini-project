const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const listFilmsBox = document.querySelector('.list-film')
const formSearch = document.getElementById('form')
const searchInput = document.querySelector('.search')
const methods = {
    methods: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
getMovies(API_URL)
function getMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderingFilmLists(data.results)
        })
}

function renderingFilmLists(movies) {
    const listFilms = [];
    movies.forEach(movie => {
        const { title, overview, poster_path, vote_average } = movie
        listFilms.push(`<div class="item-film col md-2-4 sm-4 c-6">
        <a href="#" class="film-box">
            <div class="poster" style="background-image: url(${IMG_PATH + poster_path})"></div>
            <div class="film-info">
                <div class="film-name">${title}</div>
                <div class="film-rate" style="color:${vote_average >= 8 ? 'green' : (vote_average <= 5 ? 'red' : 'yellow')}">${vote_average}</div>
            </div>
            <div class="film-descript">
                <h2>Overview</h2>
                <p class="overview-descript">${overview}</p>
            </div>
        </a>
    </div>`)
    })
    console.log(listFilms)
    listFilmsBox.innerHTML = listFilms.join('')
}
formSearch.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value
    if (searchTerm) {
        getMovies(SEARCH_API + searchTerm)
        searchInput.value = ''
    } else {
        window.location.reload()
    }
})




