// Specify package name | Folder path unnecessary for npm modules
import React from 'react';
import ReactDOM from 'react-dom';
//meteor modules specified by meteor/..
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
//creates exact same collection that exists on main.js
//import Mongo database collection players
import {Players} from './../imports/api/players';
import App from './../imports/ui/App'

//whenever queries change, function reruens
Meteor.startup(() => {
  Tracker.autorun(() => {
    // create variable called players
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let title = 'Score Keep';
    // Javascript XML properly formatted

    ReactDOM.render(<App title={title} players={players}/>,document.getElementById('app'));
  });
});
