import React from 'react';
import HistoryContainer from './containers/HistoryContainer';
import BoardHeaderContainer from './containers/BoardHeaderContainer';
import BoardBodyContainer from './containers/BoardBodyContainer';
import { useHistory } from 'react-router-dom';

const CaroWithBot = props => {
  let history = useHistory();
  const { user } = props;

  //Kiểm Tra Login chưa
  if (JSON.parse(localStorage.getItem('token')) === null) {
    history.push('/login');
    return <></>;
  } else {
    if (user === null) {
      return <></>;
    }
  }

  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-10">
          <div className="card text-center">
            <BoardHeaderContainer />
            <BoardBodyContainer />
          </div>
        </div>
        <div className="col-2">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default CaroWithBot;
