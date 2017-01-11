var React = require('react');

var SongsList = function(props){
  var mappedSongs = props.songs.map(function(song, index){
    return (
    <li key={index}>
    <p>{song['im:name']['label']} By {song['im:artist']['label']} 
    </p>
    </li>
    )})

  return (
    <ol id='songs'>
    {mappedSongs}
    </ol>
    );
}

module.exports = SongsList;