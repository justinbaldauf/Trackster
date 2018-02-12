
$(document).ready(function(){
  $('header button').click(function(){
    var searchInput = $('header input').val();
    Trackster.searchTracksByTitle(searchInput);
  });
});

API_KEY = '26a2316b2cbee1a267ac8659d7ee6bd1';

var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=API_KEY&format=json',
    datatype:'jsonp',
    success: function(){
    }
  });
};
