import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductsMain from './Components/ProductsMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path={['/']} component={ProductsMain} />
      </Router>
    );
  }
}

export default App;
