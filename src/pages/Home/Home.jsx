import { getTrandingFilms } from "components/Api/Api";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import Loader from "components/Loader/Loader";



export default function Home() {
  const [trandingFilms, setTrandingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 const location = useLocation()

 useEffect(() => {
 const getHomeList = async () => {
    try {
      setIsLoading(true)
      await getTrandingFilms().then(data => setTrandingFilms(data.results))
      
    } catch (error) {
      error()
          } finally { setIsLoading(false) }
   }
   getHomeList()
 }, [])
 
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      {error && setError(toast.error("Error loading. Try again"))}
       <ul>
       {trandingFilms.length>0 && trandingFilms.map(({ title, id }) => <li key={id}><NavLink state={{from: location}} style={{textDecoration:"none"}} to={`/movies/${id}`}>{title}</NavLink></li>)}
       </ul>
    </>
  )
}




//   useEffect(() => {
// getTrandingFilms().then(data => setTrandingFilms(data.results))
// }, [])


  // return (
           
  //      <ul>
  //     {trandingFilms.length>0 && trandingFilms.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
  //     </ul>
  // )