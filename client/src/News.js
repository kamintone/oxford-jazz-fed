import React from 'react';

function News() {
  console.log("Entered News function")
  return (
    <div id="App-content">
      <div className="App-section">
      <h5 style={{textAlign: "center", color: "red", fontSize: "1.25em", marginTop: "10px"}}>
          Billie: In Search of Billie Holiday
        </h5>
        <hr />
        <p style={{fontWeight: "bold"}}>Saturday, 13 March 2021 at 21:45 on BBC Two<br />
        </p>
        <p>
          In the late 1960s journalist Linda Lipnack Kuehl set out to write the definitive biography of Billie Holiday. Over the next decade, she tracked down and tape-recorded interviews with the people who knew her, including musical greats like Charles Mingus, Tony Bennett and Count Basie. But Linda’s book was never finished, and the tapes remained unplayed – until now.
        </p>
        <p>
          With unprecedented and exclusive access to Linda's 200 hours of never-before-heard interviews, this documentary showcases an American legend, capturing her depths and complexity through the voices of those who knew her best. Painstakingly restored, it is an arresting and powerful tale of one of the greatest singers who ever lived, and of Linda Lipnack Kuehl, the woman who would sacrifice her life in trying to tell it.
        </p>
        <p>&nbsp;</p>
     </div>
      <div className="App-section">
      {/* <br /> */}
        <h5 style={{textAlign: "center", color: "red", fontSize: "1.25em", marginTop: "10px"}}>
          Chick Corea
        </h5>
        <hr />
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "bold", margin: "-10px 0 10px 0"}}>
          Michael Lake has collected some tributes to pianist and composer Chick Corea, who died on 9 February 2021, You can read them on Michael's <a href="https://musicsavvy.com/remembrances-of-chick-corea-by-friends-and-colleagues/" alt="Visit Music Savvy" title="Visit Music Savvy"><em>Music Savvy</em></a> blog. 
        </p>
        {/* <p>&nbsp;</p> */}
      </div>
      <div className="App-section">
        {/* <br /> */}
        <h5 style={{textAlign: "center", color: "red", fontSize: "1.25em", marginTop: "10px"}}>
          Cancellations and Rescheduled Events
        </h5>
        <hr />
        <p style={{fontSize: "1em", textAlign: "left", fontWeight: "bold", margin: "-10px 0 10px 0"}}>
          While restrictions on live music remain in force, see the <a href="/jazzfinder" alt="Go to Jazzfinder page" title="Go to Jazzfinder page">Jazzfinder</a> page for news of online events, etc. 
        </p>
      </div>
      <div className="App-section">
        <p>
          This page should enable users to keep up with the latest developments in the jazz world, with special emphasis on the local (Oxfordshire) scene, of course.
        </p>
        <p>
          Whether this works or not depends on YOU - we want to hear about new clubs or venues opening (or closing); about last-minute gigs which didn't make it into the current Jazzfinder; about the emergence of new bands or the demise of old ones; about musicians changing allegiance or hanging up their instruments or, sadly, shuffling off this mortal coil - anything and everything that you think may be of interest to our users.
        </p>
        <p>
          Use the details on the CONTACT page to email your news to us, and we'll publish it here as soon as we can.
        </p>
        <p className="signed">
          The Committee
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default News;