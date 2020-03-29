import React from 'react';
import jfpage1 from './images/jf-page-3.jpg';
import jfpage2 from './images/jf-page-4.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      <div style={{backgroundColor: "#eceeb4", borderStyle: "solid", borderWidth: "5px", borderColor: "red", borderRadius: "5px", marginLeft: "20px", marginRight: "20px", paddingBottom: "10px"}}>
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          With the imposition of total lockdown, all events listed in JazzFinder are cancelled.  It's impossible to say at this stage when those gigs which normally take place on a regular basis will resume - the most optimistic estimate seems to be the end of May - but some events have been rescheduled &ndash; go to the <a href="/news" alt="Go to News page" title="Go to News page">News</a> page for details. 
        </p>
      </div>
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