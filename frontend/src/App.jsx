import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <h1>LJUDIO</h1>
          <Link to='/register'>REGISTER</Link>
        </header>

        <aside></aside>
        <main>
          <Route exact path='/register' component={RegisterPage} />
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
