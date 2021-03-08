import React from 'react';
// import jfpage1 from './images/jf-OND-2020-1.jpg';
// import jfpage2 from './images/jf-OND-2020-2.jpg';
import shed from './images/shed-of-steele.jpg';
import nash from './images/derek-nash.jpg';
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
          <span style={{fontWeight: "bold"}}>Wednesday, 10 March 2021 7.30pm<br />
            Live stream from <a href="https://guildfordjazz.org.uk/whats-on/concerts-online/" target="_blank" rel="noopener noreferrer">Guildford Jazz Club</a>:
            The Derek Nash Quartet with Graham Harvey (piano), George Double (drums) and Marianne Windham (bass)
          </span>
          <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
            A vibrant and charismatic performer, British Jazz Award-winning saxophonist <span style={{fontWeight: "bold"}}>Derek Nash</span> is also a bandleader, composer, arranger, record producer and engineer, and one of the UK’s busiest jazz musicians. He is leader of six bands, each with its own unique sound and featuring some of the top jazz musicians in the UK today, has been a member of Jools Holland’s Rhythm and Blues Orchestra since 2004, has led Sax Appeal for over 40 years and is a founder member of the Ronnie Scott’s Blues Explosion.
          </p>
          <div style={{textAlign: "center"}}>
            <img src={nash} alt="Derek Nash" title="Derek Nash" style={{margin: "0 auto", marginTop: "10px", border: "2px solid darkblue", borderRadius: "0.25em"}} /> 
          </div>
          <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
            The performance will be recorded and broadcast live from the Boileroom starting at 7.30pm and finishing shortly before 9pm, followed by a post-gig chat with the band. There are online Chat and Ask A Question features on the livestream site which you can use during the performance to get in touch. Tickets are &pound;10 &ndash; use link above for full information.
          </p>
          <p>&nbsp;</p> 
        </p>
      </section>
      <section className="section">
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
          <span style={{fontWeight: "bold"}}>
            Live jazz from the <a href="https://www.facebook.com/groups/shedofsteele/" target="_blank" rel="noopener noreferrer">Shed of Steele</a>:
          </span>
          <p>
            <img src={shed} alt="The Shed of Steele" title="The Shed of Steele" style={{float: "left", width: "15em", marginRight: "0.5em", border: "2px solid darkblue", borderRadius: "0.25em"}} /> 
            During lockdown, pianist <span style={{fontWeight: "bold"}}>Alex Steele</span> and bass player <span style={{fontWeight: "bold"}}>Paul Jefferies</span> are presenting live streaming sessions, in which they are joined by a guest instrumentalist or singer, from the shed in Alex’s garden. Their guests so far have been saxophonist Dom Franks, singer Fleur Stevenson and trumpeter Stuart Henderson. Come back to this page regularly to get the latest information on their programme of events.
          </p>
          <p>&nbsp;</p> 
        </p>
      </section>
      <section className="section" style={{background: "lightpink", clear: "left"}}>
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "regular"}}>
          <p>On Friday, 12 February, <span style={{fontWeight: "bold"}}>Ben &amp; Sophie-Jayne Holder</span> presented a livestream of love&ndash;themed swing &amp; jazz, with Ben on violin and (pre&ndash;recorded) piano accompanying Sophie&rsquo;s vocals.</p>
          <p>If you missed it, you can catch up on YouTube by going to <span style={{fontWeight: "bold"}}><a href="https://www.youtube.com/user/steppelli" target="_blank" rel="noopener noreferrer">Ben Holder Music</a></span>, where you'll also find videos of their previous streaming sessions. Well worth a visit! The next one is scheduled for <span style={{fontWeight: "bold"}}>Friday. 12 March</span> &ndash; don&rsquo;t miss it!</p>
          <p>&nbsp;</p> 
        </p>
      </section>
    </div>
  );
}

export default Jazzfinder;