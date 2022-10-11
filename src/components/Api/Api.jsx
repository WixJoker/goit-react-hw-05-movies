import axios from "axios";
import PropTypes from 'prop-types';


const Key = "api_key=4afdcbb23237328fa1939ff781643f4b";
const URl = "https://api.themoviedb.org/3";



export const getTrandingFilms = async () => {
   try {
     const response = await axios.get(`${URl}/trending/movie/week?${Key}`);
return response.data
   } catch (error) {
    return error
   } finally {
       
   }
};


export const getSearchFilms = async (value) => {
 try {
        const response = await axios.get(`${URl}/search/movie?${Key}&query=${value}&page=1`);
return response.data.results
 } catch (error) {
    
 }
};

export const getFilmById = async (id) => {

   try {
     const response = await axios.get(`${URl}/movie/${id}?${Key}`);
    return response.data
   } catch (error) {
    
   }
};

export const getActorDetailsFilm = async (id) => {
 try {
       const response = await axios.get(`${URl}/movie/${id}/credits?${Key}`);
    return response.data.cast
 } catch (error) {
    
 }
    
};

export const getRewievFilm = async (id) => {
  try {
      const response = await axios.get(`${URl}/movie/${id}/reviews?${Key}&page=1`);
    return response.data.results
  } catch (error) {
    
  }
};


getSearchFilms.propTypes = {
    value: PropTypes.string.isRequired
};
getActorDetailsFilm.propTypes = {
    id: PropTypes.string.isRequired
};
getRewievFilm.propTypes = {
    id: PropTypes.string.isRequired
};
getFilmById.propTypes = {
    id: PropTypes.string.isRequired
};
