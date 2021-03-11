import React from 'react';
import { Route } from 'react-router-dom';
import Home from '~/components/body/home';
import DC from '~/components/body/dc';

const Body = () => {
  return (
    <div className="body">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dc">
        <DC />
      </Route>
    </div>
  );
};

export default Body;
