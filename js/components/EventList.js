import React from 'react';
import {render} from 'react-dom';
import Parse from 'parse';
import Event from './Event';

class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {events: []};
  }

  componentDidMount() {
    const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
    query.find().then(results => {
      this.setState({
        events: results
      });
    });
  }

  render() {
    const list = this.state.events.map((evt) => {
      return (
        <Event key={evt.id} data={evt} />
      );
    });
    return (
      <div className="ui eventlist">
        <h2>event list</h2>
        <span>{this.state.events.length} total events</span><br/>
        {list}
      </div>
    );
  }
}

export default EventList;
