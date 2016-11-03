import React, {PropTypes} from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
  render() {
    return (
      <div className="ui profile">
        <img
          className="ui profile profilePic"
          src={this.props.profilePicURL}
          alt="Profile Pciture"
          height="150"
          width="150"
        />
        <div className="ui profile name">
          {this.props.name}
        </div>
        <div className="ui profile responsibility">
          {this.props.responsibility}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profilePicURL: PropTypes.string,
  name: PropTypes.string,
  responsibility: PropTypes.string
}

export default Profile;
