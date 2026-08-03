const movieListEl = document.querySelector(".movie-list");
const params = new URLSearchParams(window.location.search)
const search = params.get("search")


function routeToMovies(event) {
    window.location.href = `/movie_poster.html?search=${search || "fast"}`
}

function onSearchChange(event) {
    const title = event.target.value.trim();

    if (!title) {
        movieListEl.innerHTML = "<p>Please type a movie title.</p>";
        return;
    }

    renderMovies(title);
}

async function renderMovies(title) {
    movieListEl.innerHTML = "<p>Loading movies...</p>";

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=bd39f942&s=${encodeURIComponent(title || "fast")}`
        );

        if (!response.ok) {
            throw new Error("The movie request failed.");
        }

        const movieData = await response.json();

        if (movieData.Response === "False") {
            movieListEl.innerHTML = `<p>${movieData.Error}</p>`;
            return;
        }

        movieListEl.innerHTML = movieData.Search.map(movieHTML).join("");
    } catch (error) {
        movieListEl.innerHTML = "<p>Sorry, movies could not be loaded.</p>";
        console.error(error);
    }
}

function movieHTML(movie) {
    const poster = movie.Poster === "N/A"
        ? "<p>No poster available</p>"
        : `<img src="${movie.Poster}" alt="${movie.Title} poster">`;

    return `
        <div class="movie-card">
            <div class="movie__card--container">
                <p><b>Movie Title:</b> ${movie.Title}</p>
                <p><b>Year:</b> ${movie.Year}</p>
                <p><b>ID:</b> ${movie.imdbID}</p>
                ${poster}
            </div>
        </div>`;
}

renderMovies(search);