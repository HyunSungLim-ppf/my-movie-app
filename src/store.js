import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer);

function reducer(currentState, action){
    if(currentState === undefined) {
        return{
            number: 1,
            string01: "",
            movieListByGenre: "",
            movieGenres: [
                "Action",
                "Adventure",
                "Animation",
                "Comedy",
                "Crime",
                "Documentary",
                "Drama",
                "Family",
                "Fantasy",
                "Horror",
                "Music",
                "Musical",
                "Mystery",
                "Romance",
                "Sci-Fi",
                "Sport",
                "Thriller",
                "Western",
                "War",
            ],
            serchMovieListByGenre: "",
        }
    }
    const newState = {...currentState};

    if(action.type === 'PLUS'){
        newState.number++
    }
    if(action.type === 'searchMovieList'){
        newState.movieListByGenre = action.data.movieGenre
    }
    return newState
}

export default store;