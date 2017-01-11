var React = require('react');

var Song = function (props){
return (
  <div>
  <h3>{props.song.feed.entry.name} </h3>
  </div>
  );
};

module.exports = Song;