import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActorDetailsFilm } from "components/Api/Api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader/Loader";
import { CastList } from "./Cast.styled";


export default function Cast() {
  const { movieId } = useParams();
  const [actorsInfo, setActorsInfo] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

    useEffect(() => {
 const getDetails = async () => {
    try {
      setIsLoading(true)
      await getActorDetailsFilm(movieId).then(data => setActorsInfo(data))
      
    } catch (error) {
      error()
          } finally { setIsLoading(false) }
   }
   getDetails()
 }, [movieId])
  
if (!actorsInfo) {
  return
  };
  
  return (
    <CastList>
      <ToastContainer />
         {isLoading && <Loader />}
      {error && setError(toast.error("Error loading. Try again"))}
      {actorsInfo.map(({ original_name, character, profile_path, id }) => {
        return (
          <li key={id} style={{fontWeight:"500"}}>
            {profile_path ? <img style={{ width: "60px", height: "90px", boxShadow: "0px 5px 34px -1px rgba(0,0,0,0.66)" }}
              src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
              alt={`${original_name}`} /> : "Sorry no image"}
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        )
     })}
   </CastList>
  );
};




  // useEffect(() => {
  //   getActorDetailsFilm(movieId).then(data => setActorsInfo(data))
  // }, [movieId]);