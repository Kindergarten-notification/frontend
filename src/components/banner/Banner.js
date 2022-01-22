import React, { useState, useEffect } from 'react';
import '../style/style.css';
import BannerImg from '../../static/img/banner-img.png';

const Banner = () => {
  /*
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []); 
  */

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: BannerImg,
        backgourndPosition: 'center center',
      }}
    >
      <img className="banner-image" src={BannerImg} alt="BANNER" />
    </div>
  );
};

export default Banner;
