// Sort functionality for the movie posters page
// A-Z
// Z-A
// Newest
// Oldest

const sortMenu = document.querySelector("#sortMenu");

sortMenu.addEventListener("change", (event) => {
  const sortedMovies = [...movies];

  if (event.target.value === "az") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  }

  if (event.target.value === "za") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  displayMovies(sortedMovies);
});