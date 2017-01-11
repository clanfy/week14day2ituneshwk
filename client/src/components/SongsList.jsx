var React = require('react');

var SongsList = function(props){
  var mappedSongs = props.songs.map(function(song, index){
    return (
    <li key={index}>
    <h4><b>{song['im:name']['label']}</b></h4> 
    <img src={song['im:image'][2]['label']}/>
    <p>
    {song['im:artist']['label']} 
    <br/> Category:  
    <i>{song['category']['attributes']['label']} </i>
    <br/>
    {song['im:price']['label']} 
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