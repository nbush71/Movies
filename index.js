function openMenu() {

document.body.classList.add("menu--open");

}

function closeMenu() {

document.body.classList.remove("menu--open");

}

function routeToMovies(event) {
  event.preventDefault();

  const search = document.querySelector("#homeSearch").value.trim();

  if (!search) return;

  window.location.href =
    `movie_poster.html?search=${encodeURIComponent(search)}`;
}function routeToMovies(event) {
  event.preventDefault();

  const search = document.querySelector("#homeSearch").value.trim();

  if (!search) return;

  window.location.href =
    `movie_poster.html?search=${encodeURIComponent(search)}`;
}