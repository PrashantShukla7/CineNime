import { loadtv } from "../reducers/tvSlice.jsx";
export { removetv } from "../reducers/tvSlice.jsx";
import axios from '../../utils/axios.jsx'

export const asyncLoadtv = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios(`/tv/${id}`)
        const similar = await axios(`/tv/${id}/similar`)
        const external_ids = await axios(`/tv/${id}/external_ids`)
        const recommendations = await axios(`/tv/${id}/recommendations`)
        const videos = await axios(`/tv/${id}/videos`)
        const watchProviders = await axios(`/tv/${id}//watch/providers`)
        
        const details = {
            detail: detail.data,
            similar: similar.data.results,
            external_ids: external_ids.data,
            recommendations: recommendations.data.results,
            videos: videos.data.results.find(v => v.type === 'Trailer'),
            watchProviders: watchProviders.data.results.IN
        }
        dispatch(loadtv(details))
        
        // dispatch(loadtv(data))
    } catch (error) {
        console.error(error)
    }
}