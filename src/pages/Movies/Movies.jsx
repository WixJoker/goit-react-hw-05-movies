import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBox from "components/SearchBox/SearchBox";
import { getSearchFilms } from "components/Api/Api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "components/Loader/Loader";
import { NavLink } from "react-router-dom";



export default function Movies() {

  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation()

  useEffect(() => {
         if (!filter) {
      return
    }
 const getSearchList = async () => {
    try {
      setIsLoading(true)
      await getSearchFilms(filter).then(data => setSearchFilms(data))
      
    } catch (error) {
      error()
          } finally { setIsLoading(false) }
   }
   getSearchList()
 }, [filter])

  
if (!searchFilms) {
    return
  }

  const changeFilter = (value) => {
setSearchParams(value !== "" ? {filter: value} : {})
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      {error && setError(toast.error("Error loading. Try again"))}
       <SearchBox onChange={changeFilter} />
       <ul>
        {searchFilms.map(({ title, id }) => <li key={id}><NavLink state={{from: location}} style={{ textDecoration: "none" }}
          to={`/movies/${id}`}>{title}</NavLink></li>)}
       </ul>
     </>
  )
};


   

  // useEffect(() => {
  //   if (!filter) {
  //     return
  //   }
  //   getSearchFilms(filter).then(data => setSearchFilms(data)) 
  // }, [filter]);
  
  
  // return (
  //   <>
  //     <SearchBox onChange={changeFilter} />
  //     <ul>
  //       {searchFilms.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
  //     </ul>
  //   </>
  // );