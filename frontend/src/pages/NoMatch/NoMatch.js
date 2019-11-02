import React from 'react';
import { useHistory } from 'react-router-dom';

const NoMatch = () => {
  let history = useHistory();

  const handleHome = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <img
          src="/images/no-found.jpg"
          className="img-fluid"
          alt="Responsive image"
          aria-hidden
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div style={{ maxWidth: '25rem' }}>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block"
            onClick={handleHome}
          >
            Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
