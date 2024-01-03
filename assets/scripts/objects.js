// GLOBAL VARIABLES
movies = [];
// DOM NODES
const addMovieBtn = document.querySelector('#add-movie-btn')
const searchBtn = document.querySelector('#search-btn')



// FUNCTION DELCLARATIONS And/Or FUNCTION EXPRESSIONS

const renderMovies = (filtered = '') => {
    const movieList = document.querySelector('#movie-list');

    if(movies.length === 0){
        movieList.classList.remove('viisble');
        return;
    }else{
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';
    
    const filteredMovies = !filtered ? 
    movies :
    movies.filter(movie => {
        movie.getFormattedTitle().includes(filtered)
    })

    filteredMovies.forEach(movie => {
        const {info} = movie;
        // const {title: movieTitle} = info;
        let {getFormattedTitle} = movie;
        getFormattedTitle = getFormattedTitle.bind(movie); 

        const newMovieEl = document.createElement('li');
        let text = getFormattedTitle() + ' - ';
        let text2 = '';
        for(const key in info){
            if(key !== 'title'){
                text2 = text2 + `${key}: ${info[key]}`;
            }
        }
        
        // const keyValuePair = document.createElement('p');
        // keyValuePair.textContent = text2;
        // keyValuePair.setAttribute('style', 'color: black; font-size: 1rem;font-style: italic;display: inline')
        // newMovieEl.append(keyValuePair);

        newMovieEl.textContent = text + text2;
        movieList.append(newMovieEl);
    });

    
}

const addMovieBtnHandler = () => {
    const title = document.querySelector('#title').value || 'Some Random Movie';
    const extraName = document.querySelector('#extra-name').value || 'Random Key';
    const extraValue = document.querySelector('#extra-value').value || 'Random value';

    newMovie = {
        info : {
            title,
            [extraName] : extraValue
        },
        id: Math.random(),
        getFormattedTitle(){
            return this.info.title.toUpperCase();
        }
    }

    if(title.trim() === '' ||
       extraName.trim() === '' ||
       extraValue.trim() === ''
    ){
        alert('Invalid inputs entered')
        return;
    }

    else{
        console.log(newMovie);
        movies.push(newMovie);
        console.log(movies);
        renderMovies();
    }
}

const searchBtnHandler = () => {
    const movieToSearch = document.querySelector('#filter-title').value.toUpperCase();
    // movieToSearch = movieToSearch.toUpperCase();
    // console.log(movieToSearch);
    renderMovies(movieToSearch);
}

// EVENT LISTENERS
addMovieBtn.addEventListener('click', addMovieBtnHandler)
searchBtn.addEventListener('click', searchBtnHandler);
