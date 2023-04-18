


// src/components/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Conseils from './Conseils';
import Compteur from './Compteur';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="/conseils" component={Conseils} />
        <Route path="/compteur" component={Compteur} />
      </Routes>
    </main>
  );
};

export default Main;


















