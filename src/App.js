import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Shop from './containers/Shop/Shop';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Shop />
      </BrowserRouter>    
    );
  }
}

export default App;
