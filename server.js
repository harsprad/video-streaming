// Import the express module
const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

// Set up an endpoint that will return movie data
app.get('/api/movies', (req, res) => {
	// List of movies (this will be our "database" for now)
  const movies = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'The Matrix' },
    { id: 3, title: 'Interstellar' }
  ];

	// Send back the movie data as a JSON response
  res.json(movies);
});

// Start the server and make it listen on the defined port
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
