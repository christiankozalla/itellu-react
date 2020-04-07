import React from 'react';
import './App.css';

// Component imports
import ItelluNav from './components/Navbar/ItelluNav.js';


const styles = {
  headBanner: {
    backgroundColor: '#224e8b',
    height: 434
  }
}

function App() {
  return (
    <div className="App container">
      <div className="row">
        <ItelluNav />
      </div>
      <div className="row" style={styles.headBanner}>
        <h2 className="mt-auto text-white pb-5 pl-5">
          Wir glauben an <br/>
          Geschichten und <br/>
          Wissenschaft. <br/>
          sowie an Wandel.
        </h2>
      </div>

      <div class="arrow-down mx-auto"></div>

      <div className="row">
        <div className="col-2 my-auto mx-auto">
          <h3 className="font-weight-bold">Our Stories</h3>
        </div>
        <div className="col-2 my-auto mx-auto">
          Are real and true <br/>
          Are filled with facts <br/>
          Are interactive <br/>
          Are challenging
        </div>
      </div>
    </div>

  );
}

export default App;
