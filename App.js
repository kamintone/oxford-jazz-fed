import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import Header from './Header';
import Main from './Main';
import 'tachyons';

function App() {
  return (
    <div className="App">
    {/* Don't use httpsredirect for local testing */}
      {/* <HttpsRedirect> */}
        <Header />
        <Main />
      {/* </HttpsRedirect> */}
    </div>
  );
}

export default App