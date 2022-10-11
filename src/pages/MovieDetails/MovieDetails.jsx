import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilmById } from "components/Api/Api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader/Loader";
import { DetailsLinks, DetailsList } from "./MovieDetails.styled";
import GoHomeBtn from "components/GoHomeBtn/GoHomeBtn";


export default function MovieDetails() {

  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
const location = useLocation()

   useEffect(() => {
 const getIdFilm = async () => {
    try {
      setIsLoading(true)
      await getFilmById(movieId).then(data => setMovieInfo(data))
      
    } catch (error) {
      error()
          } finally { setIsLoading(false) }
   }
   getIdFilm()
 }, [movieId])

  
  if (!movieInfo) {
   return
  };
  const { poster_path, original_title, release_date, vote_average, overview, genres } = movieInfo;
  const date = release_date.slice(0, 4);
  const score = (vote_average * 10).toFixed();
  const filmGenres = genres.map(({ name }) => name);
  const space = filmGenres.join(" ").split();
  return (
    <>
      <ToastContainer />
        {isLoading && <Loader />}
      {error && setError(toast.error("Error loading. Try again"))}
      <main>
                  <GoHomeBtn/>
        <section style={{ display: "flex" }}>
        {poster_path ? <img style={{width:"200px", height:"300px", marginRight:"20px"}} src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={`${original_title}`} /> : null}
        <DetailsList>
          <li><h2>{`${original_title} (${date})`}</h2></li>
           <li>{`User Score ${score}%`}</li>
          <li><h3>Overwiev</h3></li>
           <li>{overview}</li>
          <li><h3>Genres</h3></li>
           <li>{space}</li>
        </DetailsList>
       </section>
      <section>
        <h3 style={{marginTop:"20px"}}>Addidition information</h3>
        <ul>
          <li>{<DetailsLinks state={{from: location.state.from}} to={`/movies/${movieId}/cast`}>Cast</DetailsLinks>}</li>
          <li>{<DetailsLinks state={{from: location.state.from}} to={`/movies/${movieId}/review`}>Reviews</DetailsLinks>}</li>
        </ul>
      </section>
      
      </main>
      <Outlet/>
      </>
  )
};



//   useEffect(() => {
//  getFilmById(movieId).then(data => setMovieInfo(data))
//   }, [movieId])