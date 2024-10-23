// Function to fetch movies from the server and display them
async function fetchMovies() {
  try {
    // Make a request to the API to get the list of movies
    const response = await fetch('/api/movies');
    const movies = await response.json();

    // Get the movie-list element from the DOM
    const movieList = document.getElementById('movie-list');

    // Clear any previous movie list
    movieList.innerHTML = '';

    // Loop through each movie and create a new list item
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      movieList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Add event listener to the button
document.getElementById('fetch-movies-btn').addEventListener('click', fetchMovies);
