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
        <a href="http://www.woodstockjazz.co.uk" target="_blank" rel="noopener noreferrer">Woodstock Jazz</a>:
          St Hugh’s Centre, Hensington Road, Woodstock OX20 1JL
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          Tickets £15.00 (£12.00 if ordered ahead).
        </p>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          Doors open at 19.15, show starts at 20.00.
        </p>
        <p style={{fontSize: "1.2rem", textAlign: "center"}}>
          Enquiries: Paul Jefferies, 07710 545555.
        </p>
        <hr />
        <h5 style={{textAlign: "center"}}>
          Friday 26th July, 20.00&ndash;22.00
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "justify"}}>
          Julian Marc Stringle (clarinet) with Tom Berge (piano), Paul Jefferies (bass) & Jon Clark (drums).
        </p>
        <hr />
        <h5 style={{textAlign: "center"}}>
          Thursday August 22nd, 20.00&ndash;22.00
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "justify"}}>
          Denny Ilett Trio Plus Special Guest - Denny Ilett (Gtr/vcls), Tom Kincaid (piano), Paul Jefferies (bass), plus guest TBA.
        </p>
        <hr />
        <h5 style={{textAlign: "center"}}>
          Friday September 20th
        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "justify"}}>
          Rob Terry Trio - the trio present their ‘Greatness of Gershwin’ show.
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