import React from 'react';
import hilda from './images/hildward.jpg';

function Home() {
  console.log("Entered Home function");
  return (
    <div id="App-content">
      <img className="home-img" src={hilda} alt="Hilda Ward's Lady Syncopators (1928)" title="Hilda Ward's Lady Syncopators (1928)" />
      <div className="App-section">
        {/* <p style={{fontStyle: "italic", fontWeight: "bold", fontSize: "1.1em", color: "red"}}>Please note that this site is still under development; the 'Register' button is not yet operable. For 'Stop Press' items, including details of events rescheduled because of COVID-19, go to the 'News' page.
        </p> */}
        {/* <hr /> */}
        <p style={{fontWeight: "regular"}}>Created for jazz musicians, supporters and venue providers,  the Oxfordshire Jazz Federation is now over 30 years old. We aim to act as a forum for the many styles of jazz; publicising events, encouraging new ventures and inviting ideas from members and supporters.</p>
        <p style={{fontWeight: "regular"}}>Membership of Oxfordshire Jazz Federation costs only £5 a year, renewable on April 1st.  Musicians and supporters are invited to join us to get advance notice of gigs and to help spread the word about Jazz in Oxfordshire and neighbouring counties.</p>
        <hr />
        <p style={{color: "red", fontWeight: "bold"}}>If you're a member and haven't yet paid your membership fee for 2020/21, payment can be made by online bank transfer or by PayPal - use 'Payment' button for details.
        {/* If you're already a member, use the "Login" button above, otherwise use the "Register" button and supply your name and email address to be added to the list. */}
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="App-section">
        <h4>JAZZFINDER</h4>
      </div>
      <div className="App-section">
          <p style={{fontWeight: "regular"}}>
          Our quarterly JazzFinder is not being produced at the moment. Meanwhile, the <a href="/jazzfinder" alt="Go to JazzFinder page" title="Go to JazzFinder page">JazzFinder</a> page will be showing details of any online events that come to our notice.
          </p>
          <p>&nbsp;</p>
      </div>
    </div>
  );
}


export default Home;