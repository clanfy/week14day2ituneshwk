var React = require('react');
var Song = require('./Song');

var SongsList = React.createClass({

  // getInitialState: function(){
  //   return { selectedIndex: undefined}
  // },

  render: function(){

    var mappedSongs = this.props.songs.map(function(song, index){
      return <li
      key={index}>
      {song['im:name']['label']}</li>});

    return (
      <ol id='songs'>
      {mappedSongs}
      </ol>
      
      );
  }

});

module.exports = SongsList;