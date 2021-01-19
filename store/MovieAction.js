import Axios from "../configs/axios"

export const fetchNowPlaying = () => {
  return (dispatch) => {
    Axios.get('/movie/now_playing')
      .then(({ data }) => {
        dispatch({
          type:"SET_MOVIES",
          payload: data
        })
      })
      .catch(err=>{
        console.log(err);
      })
  }

}