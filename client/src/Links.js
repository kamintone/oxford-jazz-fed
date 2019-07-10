import React from 'react';
import alyn from './images/alyn-link.png';
import alvin from './images/alvin-link.png';
import brass from './images/brass-link.png';
import dave from './images/dave-link.png';
import george from './images/george-link.png';
import jude from './images/jude-link.png';
import nick from './images/nick-gill-link.png';
import whitley from './images/whitley-bay-link.png';
import ojnetwork from './images/ojnetwork-link.png';
import sandy from './images/sandy-link.png';
import saxheaven from './images/sax-heaven-link.png';
import shawnuff from './images/shawnuff-link.png';
import slam from './images/slam-link.png';
import stgiles from './images/st-giles-link.png';
import tony from './images/tony-link.png';

function Links() {
  return (
    <div className="container App-section">
      <h3 className="d-none d-md-block pa2">Some websites that may interest you:</h3>
      <div className="row">
        <div className="weblink">
        <a href="http://www.alynshipton.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Alyn Shipton"
        title="Alyn Shipton">
        Alyn Shipton  <img src={alyn} alt="" /></a>
        </div>
        <div className="weblink">
        <a href="http://www.alvinroyjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Alvin Roy Jazz" title="Alvin Roy Jazz">
        Alvin Roy Jazz  <img src={alvin} alt="" /></a></div>
        <div className="weblink2">
        <a href="http://www.brassheaven.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Brass Heaven" title="Brass Heaven">
        Brass Heaven  <img src={brass} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.dave-moorwood.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Dave Moorwood"
        title="Dave Moorwood">
        Dave Moorwood  <img src={dave} alt="" /></a>
        </div>
        <div className="weblink">
        <a href="http://www.georgehaslam.com/"
        target="_blank" rel="noopener noreferrer" alt="George Haslam" title="George Haslam">
        George Haslam  <img src={george} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.jazzatstgiles.com/"
        target="_blank" rel="noopener noreferrer" alt="Jazz at St Giles" title="Jazz at St Giles">
        Jazz at St Giles  <img src={stgiles} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.judyeames.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Judy Eames" title="Judy Eames">
        Judy Eames  <img src={jude} alt="" /></a></div>
        <div className="weblink">
        <a href="https://whitleybayjazzfest.com/"
        target="_blank" rel="noopener noreferrer" alt="Mike Durham's Classic Jazz Party" title="Mike Durham's Classic Jazz Party">
        Mike Durham's Classic Jazz Party  <img src={whitley} alt="" /></a></div>
        <div className="weblink">
        <a href="http://classicjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Nick Gill Classic Jazz" title="Nick Gill Classic Jazz">
        Nick Gill Classic Jazz  <img src={nick} alt="" /></a></div>
        <div className="weblink">
        <a href="https://www.facebook.com/groups/1664835103799967/"
        target="_blank" rel="noopener noreferrer" alt="Oxford Jazz Network" title="Oxford Jazz Network">
        Oxford Jazz Network  <img src={ojnetwork} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.sandybrownjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Sandy Brown Jazz" title="Sandy Brown Jazz">
        Sandy Brown Jazz  <img src={sandy} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.saxophoneheaven.com/"
        target="_blank" rel="noopener noreferrer" alt="Saxophone Heaven" title="Saxophone Heaven">
        Saxophone Heaven  <img src={saxheaven} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.shawnuff.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Shawnuff" title="Shawnuff">
        Shawnuff  <img src={shawnuff} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.slamproductions.net/"
        target="_blank" rel="noopener noreferrer" alt="Slam Productions" title="Slam Productions">
        Slam Productions  <img src={slam} alt="" /></a></div>
        <div className="weblink">
        <a href="http://www.tony-davis.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Tony Davis" title="Tony Davis">
        Tony Davis  <img src={tony} alt="" /></a></div>
      </div>
    </div>
  );
}

export default Links;