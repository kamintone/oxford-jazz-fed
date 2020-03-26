import React from 'react';

function News() {
  console.log("Entered News function")
  return (
    <div id="App-content">
      <div className="App-section">
      <h4>STOP PRESS</h4>
      </div>
      <div className="App-section">
        <br />
        <h5 style={{textAlign: "center", color: "red"}}>
          Cancellations and Rescheduled Events
        </h5>
        <hr />
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          With the imposition of total lockdown, all events listed in JazzFinder are cancelled.  It's impossible to say at this stage when those gigs which normally take place on a regular basis will resume - the most optimistic estimate seems to be the end of May - but some events have been rescheduled, as shown below. 
        </p>
        <p style={{fontSize: "1rem", textAlign: "left", fontWeight: "bold"}}>
          <ul>
            <li>Swindon Jazz & Soul Festival postponed from 4 April to 18 July</li>
            <li>Woodstock Jazz:
              <ul type="square">
                <li>Rob Terry Trio (was March 20th) - New Date is August 21st 2020</li>
                <li>Damon Brown (was April 17th) - New Date is October 30th 2020</li>
              </ul>
            </li>
            <li>Jazz Cave/Cirencester:
              <ul type="square">
                <li>Alex Hutton (was March 18th) - New Date is August 26th 2020</li>
                <li>
                  Kevin Fitzsimmons (was April 22nd) - New Date December 16th 2020
                  Now featuring TINA MAY’S CHRISTMAS SPECIAL (Kevin will come back to perform in 2021)
                </li>
              </ul>
            </li>
            <li>Burford Jazz:
              <ul type="square">
                <li>Simon Spillett (was April 11th) - New Date is November 13th 2020</li>
              </ul>
            </li>
          </ul>
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