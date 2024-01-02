const addMovieBtn = document.querySelector('#add-movie-btn')
const searchMovieBtn = document.querySelector('#seach-btn')

const movies = [];
let curInd = 0;

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
            [extraName]: extraName,
            [extraValue]: extraValue
        },

        id: curInd
    };

    curInd++;
    movies.push(newMovie);
    
}

// EVENT LISTNERS
addMovieBtn.addEventListener('click', addMovieHandler);