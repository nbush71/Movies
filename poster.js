// user.js code goes in here
const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id)
}

async function renderPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`);
    const postsData = await response.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}

function postsHTML(post) {
    return `
        <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
        <div class="movie-card">
            <div class="movie__card--container">
                <h3>Movie Search</h3>
                <p><b>Movie Title:</b>${post.title}</p>
                <p><b>Year:</b>${post.year}</p>
                <p><b>ID:</b>${post.id}</p>
                <p><b>Poster:</b>${post.poster}</p>
            </div>
        </div>`
}

renderPosts(id);