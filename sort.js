const sortMenu = document.querySelector("#sortMenu");

if (sortMenu) {
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
if (sortMenu) {
}