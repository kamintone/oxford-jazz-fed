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
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          No charge - donations welcome!
        </p>
        <hr />
        <h5 style={{textAlign: "center"}}>
          The Swan Inn, 21 Acre End Street, Eynsham OX29 4PE
        <br />
          Lunchtime Jazz
        </h5>
        <h5 style={{textAlign: "center"}}>
          Friday 13th March, 12.30
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "left"}}>
          Building on the success of <strong>Alvin Roy's</strong> evening sessions on the first Monday of the month, landlord Gordon Richardson is extending the Swan's support of live jazz. The next lunchtime session is scheduled for Friday 13th March, featuring singer Judy Eames with guest <strong>Mike Wills</strong>, clarinet and sax, Tony Davis, trumpet, Terry Hutchins, guitar and Della Thompson, bass. The S1 bus stops right outside! Free entry.
        </p>
        <hr />
        <h5 style={{textAlign: "center", color: "red"}}>
          New! Swan Jam Session
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "left"}}>
          Also at the Swan, on the <strong>third</strong> Monday of the month, a jam session for jazz musicians, organised by bass player Milo Thurston. next session <strong>Monday 16th March 8pm to 10pm</strong>
        </p>
       <hr />
        <h5 style={{textAlign: "center"}}>
          Amendments to JazzFinder:
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "left"}}>
          The Nag’s Head, Abingdon – live music suspended until March.
        </p>
        <p style={{fontSize: "1.2rem", textAlign: "left"}}>
          Crazy Bear, Stadhampton – is now the second Sunday, not the last.
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