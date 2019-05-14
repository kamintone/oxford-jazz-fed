import React from 'react';

function News() {
  console.log("Entered News function");
  return (
    <div id="App-content">
      <div className="App-section">
        <p>This page should enable users to keep up with the latest developments in the jazz world, with special emphasis on the local (Oxfordshire) scene, of course.</p>

        <p>Whether this works or not depends on YOU - we want to hear about new clubs or venues opening (or closing); about last-minute gigs which didn't make it into the current JazzFinder; about the emergence of new bands or the demise of old ones; about musicians changing allegiance or hanging up their instruments or, sadly, shuffling off this mortal coil - anything and everything that you think may be of interest to our users.</p>

        <p>Use the details on the CONTACT page to email your news to us, and we'll publish it here as soon as we can.</p>

        <p className="signed">The Committee</p>

        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default News;