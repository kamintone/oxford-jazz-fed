import React from 'react';
import hilda from './images/hildward.jpg';

function Home() {
  console.log("Entered Home function");
  return (
    <div id="App-content">
      <img className="home-img" src={hilda} alt="Hilda Ward's Lady Syncopators (1928)" title="Hilda Ward's Lady Syncopators (1928)" />
      <div className="App-section">
        <p style={{fontStyle: "italic", fontWeight: "bold", fontSize: "1.1em", color: "red"}}>Please note that this site is still under development; the 'Register' and 'Login' buttons are not yet operable. For 'Stop Press' items, go to the 'News' page.
        </p>
        <p>Created for jazz musicians, supporters and venue providers,  the Oxfordshire Jazz Federation is now over 30 years old. We aim to act as a forum for the many styles of jazz; publicising events, encouraging new ventures and inviting ideas from members and supporters.</p>
        <p>Membership of Oxfordshire Jazz Federation costs only £5 a year, renewable on April 1st.  Musicians and supporters are invited to join us to get advance notice of gigs and to help spread the word about Jazz in Oxfordshire and neighbouring counties.</p>
        <p style={{color: "red", fontWeight: "bold"}}>Payment can now be made by online bank transfer to:<br /><span style={{color: "black", fontSize: "1.2em"}}>Sort Code: 20-98-48<br />Account No: 70680486 (Oxfordshire Jazz Federation)</span><br /> with your name or initials as reference. If you do this, please also <a href="mailto:dorothy.giacomin@gmail.com">email Dorothy</a> confirming that you have paid, and include your address so that she can send your membership card.
        {/* If you're already a member, use the "Login" button above, otherwise use the "Register" button and supply your name and email address to be added to the list. */}
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="App-section">
        <h4>JAZZFINDER</h4>
      </div>
      <div className="App-section">
          <p>
            As stated above, this site is still under development. Eventually the information contained in the quarterly newsletter, JazzFinder, will be available to members only in a form which will be searchable by venue, date or performers. For the present, the newsletter can be freely accessed via the JAZZFINDER button in the menu bar.
          </p>
          <p>&nbsp;</p>
      </div>
    </div>
  );
}


export default Home;