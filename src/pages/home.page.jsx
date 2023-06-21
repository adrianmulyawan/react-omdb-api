import React, { useState } from 'react';
import NavbarComponent from '../components/navbar.component';

const HomePage = () => {
  const [query, setQuery] = useState('');

  console.info(query, '=> yang anda cari');

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
      </div>
    </>
  );
}

export default HomePage;
