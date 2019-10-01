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
          Cuddesdon Live Jazz evening in Cuddesden Village Hall        </h5>
        {/* <hr /> */}
        <h5 style={{textAlign: "center"}}>
          7.30 for 8.00 pm, 21st November 2019        </h5>
        <p style={{fontSize: "1.2rem", textAlign: "justify"}}>
          Following the success of the Live Jazz in May and by popular request, Alyn Shipton, our patron, of Radio 3 fame, and his band The Cat Among The Pigeons are returning on 21st November 2019, 7.30pm for 8pm. Cash bar, tickets £10, available in advance from Susan Palmer (email susanjoypalmer [at] gmail.com to reserve).        </p>
        {/* <hr /> */}
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