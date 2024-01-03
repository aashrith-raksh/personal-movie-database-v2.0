const addMovieBtn = document.querySelector('#add-movie-btn')
const searchMovieBtn = document.querySelector('#seach-btn')
const movieList = document.querySelector('#movie-list');
const searchBtn = document.getElementById('search-btn');


const movies = [];

// UTILITY FUNCTIONS
const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
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

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
  };


// EVENT LISTNERS
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
