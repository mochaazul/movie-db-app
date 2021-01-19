import Axios from "../configs/axios"

export const fetchNowPlaying = () => {
  return (dispatch) => {
    Axios.get('/movie/now_playing')
      .then(({ data }) => {
        dispatch({
          type: "SET_MOVIES",
          payload: data.results
        })
      })
      .catch(err => {
        // blm ada error handler
        console.log(err);
      })
  }
}

// sebenernya ga perlu bikin action lg sih....
export const fetchNextPage = (page) => {
  return (dispatch) => {
    Axios.get('/movie/now_playing', {
      params: {
        page
      }
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_MOVIES",
          payload: data.results
        })
      })
      .catch(err => {
        // blm ada error handler
        console.log(err);
      })
  }
}

export const fetchSimilarMovie = (movieId) => {
  return (dispatch) => {
    Axios.get(`/movie/${movieId}/similar`)
      .then(({ data }) => {
        dispatch({
          type: "SET_SIMILARS",
          payload: data.results
        })
      })
      .catch(err => {
        // blm ada error handler
        console.log(err);
      })
  }
}

