import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRewievFilm } from "components/Api/Api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader/Loader";

export default function Reviews() {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

     useEffect(() => {
 const getReview = async () => {
    try {
      setIsLoading(true)
      await getRewievFilm(movieId).then(data => setReviews(data))
      
    } catch (error) {
      error()
          } finally { setIsLoading(false) }
   }
   getReview()
 }, [movieId])
  
  if (!reviews) {
    return
  };

  return (
    <>
      <ToastContainer/>
          {isLoading && <Loader />}
      {error && setError(toast.error("Error loading. Try again"))}
    {reviews.length>0 ? <ul style={{marginTop:"12px"}}>
        {reviews.map(({ content, author, id }) => {
          return (
            <li key={id} style={{marginBottom:"12px"}}>
              <h2 style={{marginBottom:"12px"}}>{`Author: ${author}`}</h2>
              <article style={{marginBottom:"12px"}}>{content}</article>
            </li>
          );
     })}
      </ul> : <h2>Sorry, no info</h2>}
      </>
  );
};




  // useEffect(() => {
  // getRewievFilm(movieId).then(data => setReviews(data))
  // }, [movieId])