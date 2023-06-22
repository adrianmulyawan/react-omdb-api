import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/navbar.component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [film, setFilm] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const searchFilm = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=9775ea2d`);
      const data = response.data;
      setFilm(data.Search);
    }
    searchFilm();
  }, [query]);

  const handleDetailFilm = (event) => {
    const imdbID = event.target.value;
    console.info(imdbID, '=> idnya');

    navigate(`/movie/detail/${imdbID}`);
  };

  return (
    <>
      {/* Navbar Component */}
      <NavbarComponent />

      <div className="container mt-3">
        {/* Search Bar */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Film..."
            onChange={ (e) => setQuery(e.target.value) }
            value={ query }
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>

        {/* Film */}
        <div className="row align-items-center">
          {
            film && film.map((data) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-4 my-2" key={ data.imdbID }>
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <img src={ data.Poster || process.env.PUBLIC_URL + "/movie.jpg" }
                    className="card-img-top" 
                    alt="film-banner" 
                    style={{ width: '100%', height: '75vh', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} 
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        { data.Title } ({ data.Year })
                      </h5>
                      <p className="card-text">
                        Release: { data.Year }
                      </p>
                      <p className='card-text'>
                        Movie Type: { data.Type }
                      </p>
                      <div className="d-grid mt-2">
                        <button className="btn btn-primary" value={ data.imdbID } onClick={ handleDetailFilm }>Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default HomePage;
