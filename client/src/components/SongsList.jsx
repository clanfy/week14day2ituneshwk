var React = require('react');

var SongsList = function(props){
  var mappedSongs = props.songs.map(function(song, index){
    return (
    <li key={index}>
    {song['im:name']['label']}
    </li>
    )})

  return (
    <ol id='songs'>
    {mappedSongs}
    </ol>
    );
}

module.exports = SongsList;