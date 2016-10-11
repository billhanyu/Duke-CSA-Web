import React from 'react';
import {render} from 'react-dom';
import People from './People';
import EventList from './EventList';

class Container extends React.Component {
  render() {
    return (
      <div className="ui container">
        <People />
        <EventList />
      </div>
    );
  }
}

export default Container;
