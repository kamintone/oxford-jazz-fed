import React from 'react';
import jfpage1 from './images/jf-page-1.jpg';
import jfpage2 from './images/jf-page-2.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      <img src={jfpage1} alt="JazzFinder page 1" />
      <img src={jfpage2} alt="JazzFinder page 2" />
    </div>
  );
}

export default JazzFinder;