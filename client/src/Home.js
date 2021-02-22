import React from 'react';
// import hilda from './images/hildward.jpg';
import image1 from './images/image-1.jpg';
import image2 from './images/image-2.jpg';
import image3 from './images/image-3.jpg';
import image4 from './images/image-4.jpg';
import image5 from './images/image-5.jpg';
import image6 from './images/image-6.jpg';
import image7 from './images/image-7.jpg';
import image8 from './images/image-8.jpg';
import image9 from './images/image-9.jpg';
import image10 from './images/image-10.jpg';
import image11 from './images/image-11.jpg';
import image12 from './images/image-12.jpg';
import image13 from './images/image-13.jpg';
import image14 from './images/image-14.jpg';

function Home() {
  console.log("Entered Home function");
  return (
    <div id="App-content">
      {/* <img className="home-img" src={hilda} alt="Hilda Ward's Lady Syncopators (1928)" title="Hilda Ward's Lady Syncopators (1928)" /> */}
    <div id="container">
      <div className="photobanner">
        <img className="first" src={image1} alt="Billie Holiday" title="Billie Holiday" />
        <img src={image2} alt="Charles Mingus" title="Charles Mingus" />
        <img src={image3} alt="Charlie Parker" title="Charlie Parker" />
        <img src={image4} alt="Dave Brubeck" title="Dave Brubeck" />
        <img src={image5} alt="Duke Ellington" title="Duke Ellington" />
        <img src={image6} alt="Ella Fitzgerald" title="Ella Fitzgerald" />
        <img src={image7} alt="Erroll Garner" title="Erroll Garner" />
        <img src={image8} alt="Herbie Hancock" title="Herbie Hancock" />
        <img src={image9} alt="Lester Young and Jo Jones" title="Lester Young and Jo Jones" />
        <img src={image10} alt="Miles Davis" title="Miles Davis" />
        <img src={image11} alt="Django Reinhardt" title="Django Reinhardt" />
        <img src={image12} alt="Sarah Vaughan" title="Sarah Vaughan" />
        <img src={image13} alt="Thelonious Monk" title="Thelonious Monk" />
        <img src={image14} alt="Louis Armstrong" title="Louis Armstrong" />
        <img src={image1} alt="Billie Holiday 2" title="Billie Holiday 2" />
        <img src={image2} alt="Charles Mingus 2" title="Charles Mingus 2" />
        <img src={image3} alt="Charlie Parker 2" title="Charlie Parker 2" />
        <img src={image4} alt="Dave Brubeck 2" title="Dave Brubeck 2" />
        <img src={image5} alt="Duke Ellington 2" title="Duke Ellington 2" />
        <img src={image6} alt="Ella Fitzgerald" title="Ella Fitzgerald 2" />
        <img src={image7} alt="Erroll Garner" title="Erroll Garner 2" />
        <img src={image8} alt="Herbie Hancock" title="Herbie Hancock" />
        <img src={image9} alt="Lester Young and Jo Jones" title="Lester Young and Jo Jones" />
        <img src={image10} alt="Miles Davis" title="Miles Davis" />
      </div>
    </div>
      <div className="App-section">
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