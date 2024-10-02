import { loadMovie } from "../reducers/MovieSlice";
export { removeMovie } from "../reducers/MovieSlice";
import axios from '../../utils/axios'

export const asyncLoadMovie = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios(`/movie/${id}`)
        const similar = await axios(`/movie/${id}/similar`)
        const external_ids = await axios(`/movie/${id}/external_ids`)
        const recommendations = await axios(`/movie/${id}/recommendations`)
        const videos = await axios(`/movie/${id}/videos`)
        const watchProviders = await axios(`/movie/${id}//watch/providers`)
        
        const details = {
            detail: detail.data,
            similar: similar.data.results,
            external_ids: external_ids.data,
            recommendations: recommendations.data.results,
            videos: videos.data.results.find(v => v.type === 'Trailer'),
            watchProviders: watchProviders.data.results.IN
        }
        dispatch(loadMovie(details))
        
        // dispatch(loadMovie(data))
    } catch (error) {
        console.error(error)
    }
}