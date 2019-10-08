import React from 'react';
import jfpage1 from './images/jf-page-1.jpg';
import jfpage2 from './images/jf-page-2.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      <section id="page1">
        <br />
        <a className="internal-link" href="#page2">Next page</a>
        <br />
        <img className="jfpage" src={jfpage1} alt="JazzFinder 2019 4th quarter page 1" title="JazzFinder 2019 4th quarter page 1" />
      </section>
      <section id="page2">
        <br />
        <a className="internal-link" href="#page1">Prev page</a>
        <a className="internal-link" href="#top">Top</a>
        <br />
        <img className="jfpage" src={jfpage2} alt="JazzFinder 2019 4th quarter page 2" title="JazzFinder 2019 4th quarter page 2" />
      </section>
    </div>
  );
}

export default JazzFinder;