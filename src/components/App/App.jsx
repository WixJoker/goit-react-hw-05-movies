import { GlobalStyle } from "./GlobalStyle";
import { ToastContainer } from 'react-toastify';
import Cast from "pages/Cast/Cast";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import Reviews from "pages/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";


export const App = () => {
  return (
   <div  style={{padding:"16px"}}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>} />
            <Route path="review" element={<Reviews/>} />
          </Route>
          <Route path="notFound" element={<NotFoundPage/>} />
        </Route>
    </Routes>
      <GlobalStyle />
      <ToastContainer/>
      </div>
    
  );
};
