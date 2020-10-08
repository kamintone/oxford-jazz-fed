import React from 'react';
import jfpage1 from './images/jf-OND-2020-1.jpg';
import jfpage2 from './images/jf-OND-2020-2.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      {/* <div style={{backgroundColor: "#eceeb4", borderStyle: "solid", borderWidth: "5px", borderColor: "red", borderRadius: "5px", marginLeft: "20px", marginRight: "20px", paddingBottom: "10px"}}>
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          At present our normal quarterly JazzFinder is not being published. Instead, we are producing a leaflet showing online and media jazz events, publications etc. every 2 weeks.
        </p>
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          We are relying on people sending us information, so please feel free to tell us about anything that&rsquo;s going on!
        </p>
      </div> */}
      <section id="page1">
        <br />
        <a className="internal-link" href="#page2">Next page</a>
        <br />
        <img className="jfpage" src={jfpage1} alt="Aug-16-to-31 page 1" title="Aug-16-to-31 page 1" />
      </section>
      <section id="page2">
        <br />
        <a className="internal-link" href="#page1">Prev page</a>
        <a className="internal-link" href="#top">Top</a>
        <br />
        <img className="jfpage" src={jfpage2} alt="Aug-16-to-31 page 2" title="Aug-16-to-31 page 2" />
      </section>
    </div>
  );
}

export default JazzFinder;