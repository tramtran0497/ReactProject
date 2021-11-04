import React, {useState} from 'react';
import Review from './Review';
//import './App.css';


function App() {
  return (
    <main>
      <div className="container">
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
