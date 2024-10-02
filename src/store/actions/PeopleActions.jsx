import { loadperson } from "../reducers/PeopleSlice.jsx";
export { removeperson } from "../reducers/PeopleSlice.jsx";
import axios from '../../utils/axios'

export const asyncLoadperson = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios(`/person/${id}`)
        const combinedCredits = await axios(`/person/${id}/combined_credits`)
        const movieCredits = await axios(`/person/${id}/movie_credits`)
        const tvCredits = await axios(`/person/${id}/tv_credits`)
        const external_ids = await axios(`/person/${id}/external_ids`)
        
        const details = {
            detail: detail.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data,
            external_ids: external_ids.data,
        }
        
        dispatch(loadperson(details))
    } catch (error) {
        console.error(error)
    }
}