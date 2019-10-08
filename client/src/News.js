import React from 'react';

function News() {
  console.log("Entered News function")
  return (
    <div id="App-content">
      <div className="App-section">
      <h4>STOP PRESS</h4>
        {/* <a className="internal-link" href="#ronnie">Ronnie Scott's Big Band</a><br />
        <a className="internal-link" href="#woodstock">Woodstock Jazz</a><br />
        <a className="internal-link" href="#galvin">Elliot Galvin/Stakla Quartet</a><br /> */}
      </div>
      <div className="App-section">
        <br />
        <h5 style={{textAlign: "center"}}>
          The Red Lion, Brightwell cum Sotwell OX10 0RT
        <br />
          Live jazz gigs every second Sunday 5 to 7pm
        </h5>
        <h5 style={{textAlign: "center"}}>
          Sunday 13th October
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          Gli Avanzi - modern jazz inspired by the jazz masters
        </p>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          No charge - donations welcome!
        </p>
        <hr />
        <h5 style={{textAlign: "center"}}>
          Cuddesdon Village Hall OX44 9HJ
        </h5>
        <h5 style={{textAlign: "center"}}>
          Thursday 21st November, 7.30pm for 8pm 
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
        Alyn Shipton and his band The Cat Among The Pigeons return to Cuddesdon by popular request 
        </p>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          Cash bar, tickets £10, available in advance from Susan Palmer (email susanjoypalmer [at] gmail.com to reserve)
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="App-section">
        <p>
          This page should enable users to keep up with the latest developments in the jazz world, with special emphasis on the local (Oxfordshire) scene, of course.
        </p>
        <p>
          Whether this works or not depends on YOU - we want to hear about new clubs or venues opening (or closing); about last-minute gigs which didn't make it into the current JazzFinder; about the emergence of new bands or the demise of old ones; about musicians changing allegiance or hanging up their instruments or, sadly, shuffling off this mortal coil - anything and everything that you think may be of interest to our users.
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