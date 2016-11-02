import React from 'react';
import {render} from 'react-dom';
import Parse from 'parse';

class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {events: []};
    this.getEvents();
  }

  getEvents() {
    const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
    query.find().then(results => {
      console.log(results);
      this.setState({
        events: results
      });
    });
  }

  render() {
    return (
      <div className="ui eventlist">
        {this.state.events.map((evt) => {
          <div><span>{"shit"}</span>
          <Event key={evt.id} title="title" /></div>
        })}
      </div>
    );
  }
}

export default EventList;
