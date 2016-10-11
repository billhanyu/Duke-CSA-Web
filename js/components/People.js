import React from 'react';
import {render} from 'react-dom';
import Profile from './Profile';

class People extends React.Component {
  render() {
    return (
      <div className="ui people">
        <Profile
          profilePicURL="http://simpleicon.com/wp-content/uploads/user1.png"
          name="Bill Yu"
          responsibility="tech intern"
        />
      </div>
    );
  }
}

export default People;
