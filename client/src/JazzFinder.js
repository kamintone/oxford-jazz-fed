import React from 'react';
// import jfpage1 from './images/jf-OND-2020-1.jpg';
// import jfpage2 from './images/jf-OND-2020-2.jpg';
// import fleur from './images/fleur-stevenson.jpg';
import ljllogo from './images/ljl-logo.png'

function JazzFinder() {
  return (
    <div id="jfimage">
      <section className="section">
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
          At present our normal quarterly JazzFinder is not being published. Instead, we are showing details of online and media jazz events as they are notified to us.
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
        {/* <p>Monday, 15 February 2021 from 19:00-20:00 UTC</p>
            <ul type="none">
              <li>Live jazz from the <a href="https://www.facebook.com/groups/shedofsteele/" target="_blank" rel="noopener noreferrer">Shed of Steele</a>:</li>
            </ul>
            <article style={{marginTop: "-1em"}}>
              <p>
              Please welcome gorgeous singer and all round lovely person, Fleur Stevenson for our next performance on Facebook Live.Fleur will be singing music with a romantic 'Valentine's' feel, combined with melodies referencing the 'Moon'. Beautiful! Presented live from the 'Shed of Steele' with Alex Steele on piano and Paul Jefferies plucking (or perhaps bowing) the double bass. Come join us! Use the link above to get full details.</p>
            </article>   */}
          <p>Learn Jazz Live Workshop - Saturday 27 to Sunday 28 February</p>
            <article style={{marginTop: "-1em", paddingTop: "1em"}}>
              <p style={{fontSize: "1em"}}>
                If you're learning to <em>play</em> jazz, you may be interested in this 2-day virtual event that delivers the best jazz education you can experience, all in one spot! Click/tap the logo for more information.</p>
            </article>
            <div className="weblink" style={{height: "180px"}} >
              <a href="https://members.learnjazzstandards.com/ljs-live-2021/"
              target="_blank" rel="noopener noreferrer" alt="Learn Jazz Live"
              title="Learn Jazz Live">
              <img src={ljllogo} style={{margin: "0"}} alt="" /></a>
            </div>
          </p>
        </section>
        <section className="section" style={{background: "lightpink"}}>
          <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
            <p>On Friday, 12 February, Ben &amp; Sophie-Jayne Holder presented a      livestream of love themed swing &amp; jazz, with Ben on violin and (pre-recorded) piano accompanying Sophie's vocals.</p>
            <p>If you missed it, you can catch up on YouTube by going to <a href="https://www.youtube.com/user/steppelli" target="_blank" rel="noopener noreferrer">Ben Holder Music</a>, where you'll also find videos of their previous streaming sessions. Well worth a visit!</p>
            <p>&nbsp;</p> 
          </p>
        </section>
    </div>
  );
}

export default JazzFinder;