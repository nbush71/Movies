function openMenu() {

document.body.classList.add("menu--open");

}

function closeMenu() {

document.body.classList.remove("menu--open");

}

function routeToMovies(event) {

const search = event.target.value;

window.location.href = /movie_poster.html?search=${search}

}