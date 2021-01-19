
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  currentPage: 1,
  movies: null,
  imageUri: 'https://image.tmdb.org/t/p/',
  selectedMovie: null,
  similarMovies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":

      return { ...state, movies: action.payload }
    case "SET_MOVIE":
      return { ...state, selectedMovie: action.payload }
    case "SET_SIMILARS":
      return { ...state, similarMovies: action.payload }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload }

      // ini redundant
    case "ADD_MOVIES":
      return { ...state,currentPage: state.currentPage+1, movies: [...state.movies, ...action.payload] }
    default:
      return state
  }
}


const store = createStore(reducer, applyMiddleware(thunk))

export default store