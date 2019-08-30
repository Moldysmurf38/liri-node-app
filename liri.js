var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require("moment")
var fs = require("fs");

var inputData = process.argv;
var appSearch = inputData[2];
var userSearch = process.argv.slice(3).join(" ");

if (appSearch === "movie-this") {
    if (userSearch === null || userSearch === undefined || userSearch.length === 0) {
        console.log("No movie entered.");
        console.log("Check out this movie instead:");
        defaultMovie();
    }
    else {
        movieSearch();
    };
};

if (appSearch === "spotify-this-song") {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    if (userSearch === null || userSearch === undefined || userSearch.length === 0) {
        console.log("No song entered.");
        console.log("Check out this song instead:");
        defaultSpotify();
    } else {
        spotifySearch();
    };
};

if (appSearch === "concert-this") {
    if (userSearch === null || userSearch === undefined || userSearch.length === 0) {
        console.log("No artist entered.");
        console.log("Please enter an artist name.");
    }
    else {
        concertSearch();
    };
};

if (appSearch === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        //console.log(data);
        var spotify = new Spotify({
            id: keys.spotify.id,
            secret: keys.spotify.secret
        });
        var userSearch = data;
        spotify.search({ type: 'track', query: userSearch }, function (err, response) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var keyTrack = response.tracks.items[0];
            var trackData = [
                "Song Title: " + keyTrack.name,
                "Artist(s): " + keyTrack.artists[0].name,
                "Album Name: " + keyTrack.album.name,
                "Spotify URL: " + keyTrack.external_urls.spotify
            ].join("\n")
            console.log(trackData);
        });
        if (err) {
            throw err;
        };
    });
};

function movieSearch() {
    axios.get("http://www.omdbapi.com/?apikey=3183833e&t=" + userSearch + "&plot=short").then(
            function (response) {
                var movieData = [
                    "Movie Title: " + response.data.Title,
                    "Year: " + response.data.Year,
                    "IMDB Rating: " + response.data.imdbRating,
                    "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                    "Production Country: " + response.data.Country,
                    "Movie Language: " + response.data.Language,
                    "Actors: " + response.data.Actors,
                    "Plot: " + response.data.Plot
                ].join("\n")
                console.log(movieData);
            });
};

function concertSearch() {
axios.get("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=81a99f21409790460407495ad0d25377").then(
    function(response) {
        var concertData = [
            "Venue Name: " + response.data[0].venue.name,
            "Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + " " + response.data[0].venue.country,
            "Event Date: " + moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a') 
        ];
        console.log(concertData);
    });
};

function spotifySearch() {
    spotify.search({ type: 'track', query: userSearch }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var keyTrack = response.tracks.items[0]
        var trackData = [
            "Song Title: " + keyTrack.name,
            "Artist(s): " + keyTrack.artists[0].name,
            "Album Name: " + keyTrack.album.name,
            "Spotify URL: " + keyTrack.external_urls.spotify
        ].join("\n")
        console.log(trackData);
    });
};

function defaultSpotify() {
    var trackData = [
        "Song Title: The Sign",
        "Artist(s): Ace of Base",
        "Album Name: Happy Nation",
        "Spotify URL: https://open.spotify.com/album/37UgOnkBN4ZfY1nBoSCL9L"
    ].join("\n")
    console.log(trackData);
};

function defaultMovie() {
    var movieData = [
        'Movie Title: Mr. Nobody',
        'Year: 2009',
        'IMDB Rating: 7.8',
        'Rotten Tomatoes Rating: 67%',
        'Production Country: Belgium, Germany, Canada, France, USA, UK',
        'Movie Language: English, Mohawk',
        'Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham',
        'Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn\'t choose, anything is possible.'
    ].join("\n")
    console.log(movieData);
};