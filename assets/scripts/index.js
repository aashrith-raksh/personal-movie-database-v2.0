const addMovieBtn = document.querySelector('#add-movie-btn')
const searchMovieBtn = document.querySelector('#seach-btn')
const movieList = document.querySelector('#movie-list');

const movies = [];

// UTILITY FUNCTIONS
const renderMovies = () => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });

}


//EVENT HANDLER FUCNTIONS
const addMovieHandler = () => {
    const title = document.querySelector('#title').value; 
    const extraName = document.querySelector('#extra-name').value; 
    const extraValue = document.querySelector('#extra-value').value; 

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === ""){
        alert('invalid user inputs')
        return;
    }

    const newMovie = {
        info: {
          title,
          [extraName]: extraValue
        },
        id: Math.random()
      };

      movies.push(newMovie);
      renderMovies();
    
}


// EVENT LISTNERS
addMovieBtn.addEventListener('click', addMovieHandler);