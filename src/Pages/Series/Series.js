import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import './Series.css'

const Series = () => {
  const [content, setContent] = useState([])
  const [page,setPage]= useState(1)
  const [numOfPages, setNumOfPages] = useState()
  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );
    console.log(data)
    setContent(data.results)
    setNumOfPages(data.total_pages)
  };
  useEffect(()=>{fetchSeries()},[page])
  return (
    <div>
      <span className="page-heading">Series</span>
      <div className="series">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type='tv'
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
    </div>
  );
}

export default Series
