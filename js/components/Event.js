import React from 'react';
import {render} from 'react-dom';

class Event extends React.Component {

  render() {
    const profilePic = this.props.data.get("profilePic");
    return (
      <div className="ui event">
        <h4>{this.props.data.get("title")}</h4><br/>
        <span>{this.props.data.get("detail")}</span>
        {profilePic ? (
          <img
            src={profilePic.url()}
            alt="event profile picture"
            width="300"
            height="200"
          />
        ) : (
          <br/>
        )}
        <br/><br/></div>
        // if (this.props.picurl) {
        //   <img
        //     src=this.props.picurl
        //     alt="Event Profile Picture"
        //     className="ui event picurl"
        //   />
        // }
        //<span className="ui event title">
        //  {this.props.title}
        //</span>
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
    );
  }
}

export default Event;
