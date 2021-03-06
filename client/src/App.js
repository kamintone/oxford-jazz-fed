import React, { useState } from 'react';
import HttpsRedirect from 'react-https-redirect';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import 'tachyons';

const App = () => {
  const [user, setUser] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      {/* Don't use httpsredirect for local testing */}
        <HttpsRedirect>
          <Header user={user} setUser={setUser} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          <Main vip={user.vip} />
          <Footer />
        </HttpsRedirect>
    </div>
  );
}


export default App