import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Parse from 'parse';

const CLIENT_ID = "Gfb36k13JiVKIcDDZAwjOAYUT1m6p1Nl0CddTq03";
const CLIENT_SECRET = "QgvFQdy6cDzsB5PB6EZszPw3AEBkVamq95Y7dhm2";
const SERVER_URL = "https://parseapi.back4app.com/";

Parse.initialize(CLIENT_ID, CLIENT_SECRET);
Parse.serverURL = SERVER_URL;

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
