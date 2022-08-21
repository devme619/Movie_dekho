import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Movies.css'

const Movies = () => {
  const [content, setContent] = useState([])
  const [page,setPage]= useState(1)
  const [numOfPages, setNumOfPages] = useState()
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    setContent(data.results)
    setNumOfPages(data.total_pages)
  };
  useEffect(()=>{fetchMovies()},[page])
  return (
    <div>
      <span className="page-heading">Movies</span>
      <div className="movies">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
    </div>
  );
};

export default Movies;
