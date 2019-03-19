import React from 'react';

function Links() {
  console.log("Entered Links function");
  return (
    <div className="container App-section">
      <h3 className="d-none d-md-block">Some websites you may find interesting:</h3>
      <div className="row">
        <div className="weblink">
        <a href="http://www.alvinroyjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Alvin Roy Jazz" title="Alvin Roy Jazz">
        Alvin Roy Jazz</a></div>
        <div className="weblink">
        <a href="http://www.brassheaven.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Brass Heaven" title="Brass Heaven">
        Brass Heaven</a></div>
        <div className="weblink">
        <a href="http://www.georgehaslam.com/"
        target="_blank" rel="noopener noreferrer" alt="George Haslam" title="George Haslam">
        George Haslam</a></div>
        <div className="weblink">
        <a href="http://www.judyeames.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Judy Eames" title="Judy Eames">
        Judy Eames</a></div>
        <div className="weblink">
        <a href="http://classicjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Nick Gill Classic Jazz" title="Nick Gill Classic Jazz">
        Nick Gill Classic Jazz</a></div>
        <div className="weblink">
        <a href="http://www.sandybrownjazz.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Sandy Brown Jazz" title="Sandy Brown Jazz">
        Sandy Brown Jazz</a></div>
        <div className="weblink">
        <a href="http://www.saxophoneheaven.com/"
        target="_blank" rel="noopener noreferrer" alt="Saxophone Heaven" title="Saxophone Heaven">
        Saxophone Heaven</a></div>
        <div className="weblink">
        <a href="http://www.shawnuff.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Shawnuff" title="Shawnuff">
        Shawnuff</a></div>
        <div className="weblink">
        <a href="http://www.slamproductions.net/"
        target="_blank" rel="noopener noreferrer" alt="Slam Productions" title="Slam Productions">
        Slam Productions</a></div>
        <div className="weblink">
        <a href="http://www.tony-davis.co.uk/"
        target="_blank" rel="noopener noreferrer" alt="Tony Davis" title="Tony Davis">
        Tony Davis</a></div>
      </div>
    </div>
  );
}

export default Links;