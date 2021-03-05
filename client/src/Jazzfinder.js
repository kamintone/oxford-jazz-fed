import React from 'react';
// import jfpage1 from './images/jf-OND-2020-1.jpg';
// import jfpage2 from './images/jf-OND-2020-2.jpg';
import shed from './images/shed-of-steele.jpg';
// import stuart from './images/stuart-henderson.jpg'

function Jazzfinder() {
  return (
    <div id="jfimage">
      <section className="section">
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
          At present our normal quarterly Jazzfinder is not being published. Instead, we are showing details of online and media jazz events as they are notified to us.
        </p>
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
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
      <section className="section">
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
        <span style={{fontWeight: "bold"}}>Monday, 1 March 2021 from 19:00-20:00 UTC
            <ul type="none">
              <li>Live jazz from the <a href="https://www.facebook.com/groups/shedofsteele/" target="_blank" rel="noopener noreferrer">Shed of Steele</a>:</li>
            </ul></span>
            {/* <article style={{marginTop: "-1em"}}> */}
              <p>
              <img src={shed} alt="The Shed of Steele" title="The Shed of Steele" style={{float: "left", width: "15em", marginRight: "0.5em", border: "2px solid darkblue", borderRadius: "0.25em"}} /> 
              During lockdown, pianist <span style={{fontWeight: "bold"}}>Alex Steele</span> and bass player <span style={{fontWeight: "bold"}}>Paul Jefferies</span> are presenting live streaming sessions, in which they are joined by a guest instrumentalist or singer, from the shed in Alex’s garden. Their guests so far have been saxophonist Dom Franks, singer Fleur Stevenson and trumpeter Stuart Henderson. Come back to this page regularly to get the latest information on their programme of events. </p>
            {/* </article>   */}
            <p>&nbsp;</p> 
          </p>
        </section>
        <section className="section" style={{background: "lightpink", clear: "left"}}>
          <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
            <p>On Friday, 12 February, <span style={{fontWeight: "bold"}}>Ben &amp; Sophie-Jayne Holder</span> presented a livestream of love&ndash;themed swing &amp; jazz, with Ben on violin and (pre&ndash;recorded) piano accompanying Sophie&rsquo;s vocals.</p>
            <p>If you missed it, you can catch up on YouTube by going to <a href="https://www.youtube.com/user/steppelli" target="_blank" rel="noopener noreferrer">Ben Holder Music</a>, where you'll also find videos of their previous streaming sessions. Well worth a visit! The next one is scheduled for <span style={{fontWeight: "bold"}}>Friday. 12 March</span> &ndash; don&rsquo;t miss it!</p>
            <p>&nbsp;</p> 
          </p>
        </section>
    </div>
  );
}

export default Jazzfinder;