var React = require('react');
var SongsList = require('../components/SongsList');


var SongsContainer = React.createClass({

  getInitialState: function(){
    return {
      songs: []
    }
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topaudiobooks/limit=25/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText)['feed']['entry'];
        console.log("data", data);
        this.setState({songs: data});
      }
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return (
      <div>
      <p> Top 25 Audio Books in the UK </p>
      <SongsList songs={this.state.songs} />
      </div>
      )
  }

});

module.exports = SongsContainer;