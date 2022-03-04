var url = 'https://icanhazdadjoke.com';
var jokeBtn = document.querySelector('.btn')
var jokeText = document.getElementById('text-joke');
jokeBtn.addEventListener('click', pushDataToDiv)
function pushDataToDiv() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    fetch(url, config)
        .then(function (response) {
            return response.json()
        })
        .then(data => {
            jokeText.innerHTML = data.joke
        })

}

