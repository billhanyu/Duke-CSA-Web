import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

import '../css/header.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
