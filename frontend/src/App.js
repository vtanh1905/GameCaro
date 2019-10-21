import React from 'react';
import Board from './components/Board';
import HistoryContainer from './containers/HistoryContainer';

const App = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-10">
          <Board />
        </div>
        <div className="col-2">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
