import React from 'react';
import jfpage1 from './images/jf-page-3.jpg';
import jfpage2 from './images/jf-page-4.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      <section id="page1">
        <a className="internal-link" href="#page2">Next page</a>
        <img className="jfpage" src={jfpage1} alt="JazzFinder 2019 3rd quarter page 1" title="JazzFinder 2019 2nd quarter page 1" />
      </section>
      <section id="page2">
        <a className="internal-link" href="#page1">Prev page</a>
        <a className="internal-link" href="#top">Top</a>
        <img className="jfpage" src={jfpage2} alt="JazzFinder 2019 3rd quarter page 2" title="JazzFinder 2019 2nd quarter page 2" />
      </section>
    </div>
  );
}

export default JazzFinder;