
const form = document.getElementById('searchForm');
const TV_URL = 'https://api.tvmaze.com/search/shows?q=';
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    try {
        const searchTerm = form.elements.q.value;
        const config = { Headers: { 'Content-Type': 'application/json' }, params: { q: searchTerm } }
        const res = await axios.get(TV_URL, config)
        renderingImage(res.data)
    } catch (error) {
        console.log(error)

    }

})
function renderingImage(data) {
    data.forEach(result => {
        if (result.show.image) {
            const url = result.show.image.medium
            if (url) {
                const imgBox = document.createElement('img')
                imgBox.src = url
                document.body.append(imgBox)
            }
        }

    })
}
