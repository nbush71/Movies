const movieListEl = document.querySelector(".movie-list");
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovie(id)
}

async function renderMovie(id) {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=bd39f942&s`);
    const movieData = await response.json();
    movieListEl.innerHTML = movieData.map(movie => movieHTML(id)).join('');
}

function movieHTML(movie) {
    return `
        <div class="movie-card">
            <div class="movie__card--container">
                <p><b>Movie Title:</b>${movie.title}</p>
                <p><b>Year:</b>${movie.year}</p>
                <p><b>ID:</b>${movie.id}</p>
                <p><b>Poster:</b>${movie.poster}</p>
            </div>
        </div>`
}

renderMovie(id);

console.log(id);