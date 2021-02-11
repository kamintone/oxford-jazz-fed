import React from 'react';
// import jfpage1 from './images/jf-OND-2020-1.jpg';
// import jfpage2 from './images/jf-OND-2020-2.jpg';

function JazzFinder() {
  return (
    <div id="jfimage">
      <section className="section">
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          At present our normal quarterly JazzFinder is not being published. Instead, we are showing details of online and media jazz events as they are notified to us.
        </p>
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          We are relying on people sending us information, so please feel free to tell us about anything that&rsquo;s going on!
        </p>
      </section>
      {/* <section id="page1">
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
      </section> */}
      <section className="section" style={{background: "lightpink"}}>
      <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
      <p>Friday, 12 February 2021 from 18:00 UTC</p>
          <ul type="none">
            <li>Online with Facebook Live or on YouTube - free event from <a href="https://www.facebook.com/benholdermusic/" target="_blank" rel="noopener noreferrer">Ben Holder Music</a>:</li>
          </ul>
          <article style={{marginTop: "-1rem"}}>
            <p>Ben &amp; Sophie-Jayne Holder present a livestream of love themed swing &amp; jazz, with Ben on violin and (pre-recorded) piano accompanying Sophie's vocals.</p>
            <p>Use the link above to get full details.</p>
          </article>  
      </p>
      </section>
      <section className="section">
      <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
      <p>Monday, 15 February 2021 from 19:00-20:00 UTC</p>
          <ul type="none">
            <li>Live jazz from the <a href="https://www.facebook.com/groups/shedofsteele/" target="_blank" rel="noopener noreferrer">Shed of Steele</a>:</li>
          </ul>
          <article style={{marginTop: "-1rem"}}>
            <p>Please welcome gorgeous singer and all round lovely person, <a href="https://www.fleurstevensonjazz.co.uk" target="_blank" rel="noopener noreferrer">Fleur Stevenson</a> for our next performance on Facebook Live.  Fleur will be singing music with a romantic 'Valentine's' feel, combined with melodies referencing the 'Moon'. Beautiful!</p>
            <p>
            Presented live from the 'Shed of Steele' with Alex Steele on piano and Paul Jefferies plucking (or perhaps bowing) the double bass. Come join us! Use the link above to get full details.</p>
          </article>  
      </p>
      </section>
      <p>&nbsp;</p> 
    </div>
  );
}

export default JazzFinder;