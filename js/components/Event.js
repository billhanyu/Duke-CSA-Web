import React from 'react';
import {render} from 'react-dom';

class Event extends React.Component {
  render() {
    return (
      <div className="ui event">
        // if (this.props.picurl) {
        //   <img
        //     src=this.props.picurl
        //     alt="Event Profile Picture"
        //     className="ui event picurl"
        //   />
        // }
        <span className="ui event title">
          {this.props.title}
        </span>
        // <span className="ui event time">
        //   {this.props.time}
        // </span>
        // <span className="ui event location">
        //   {this.props.location}
        // </span>
        // if (this.props.signupurl) {
        //   <a className="ui event signupurl" href=this.props.signupurl>
        //     Sign Up
        //   </a>
        // }
      </div>
    );
  }
}

Event.propTypes = {
  title: PropTypes.string,
  // time: PropTypes.string,
  // location: PropTypes.string,
  // detail: PropTypes.string,
  // signupurl: PropTypes.string,
  // picurl: PropTypes.string
}

export default Event;
