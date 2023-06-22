import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../components/navbar.component';
import axios from 'axios';

const DetailPage = () => {
  const { imdbID } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const detailFilm = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=9775ea2d`);
      const data = response.data;
      setDetail(data);
    };

    detailFilm();
  }, [imdbID]);

  console.info(detail, '=> detail film');

  // const ratings = detail.Ratings;
  // const rating = ratings.filter((data) => {
  //   return data.Source === 'Internet Movie Database'
  // })
  // console.info(rating, '=> rating')

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row align-items-start">
          {/* Poster */}
          <div className="col-sm-6 col-md-4 col-lg-4 my-4">
            <div className="card p-2" style={{ borderRadius: '10px' }}>
              <img src={ detail.Poster } className="img-fluid" alt="banner-film" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          {/* Detail Film */}
          <div className="col-sm-6 col-md-8 col-lg-8 my-4">
            <div className="card p-3" style={{ borderRadius: '10px' }}>
              <table className="table table-responsive table-hover table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Title</th>
                    <td>
                      { detail.Title }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Director</th>
                    <td>
                      { detail.Director }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Writer</th>
                    <td>
                      { detail.Writer }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Country</th>
                    <td>
                      { detail.Country }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Actors</th>
                    <td>
                      { detail.Actors }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Genre</th>
                    <td>
                      { detail.Genre }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Released</th>
                    <td>
                      { detail.Released }
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Plot</th>
                    <td>
                      { detail.Plot }
                    </td>
                  </tr>
                  {/* <tr>
                    {
                      rating.map((data, index) => {
                        return (
                          <>
                            <th scope="row">{ data.Source }</th>
                            <td>
                              { data.Value }
                            </td>
                          </>
                        )
                      })
                    }
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
