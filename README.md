# **Liri Node.js App:**

### **Project Description:**

An application designed to be run exclusively on Node. It can take user input to see movie or song information.

### **Getting Started:**

When you have installed all the necessary files and obtained your IDs, use the following commands in node to use the app:

node liri spotify-this-song "your desired song query"
node liri movie-this "your desired movie title"
node liri concert-this "your desired artist name"
node liri do-what-it-says (reads content from a text file content and makes a query)

### **Prerequisites:**

Runs in Node.js

You will need to obtain your own Spotify API client ID and secret. Put both into a file keys.js like so:

"exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};"

When you are done, create a .env file and put in text and your IDs:

"# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret"

### **Installing:**

make sure you do "npm install" in the command line of app's main directory to download the needed npm files.

### **Built With:**

Axios: https://www.npmjs.com/package/axios
dotenv: https://www.npmjs.com/package/dotenv
Spotify API : https://www.npmjs.com/package/node-spotify-api
OMDB API: http://www.omdbapi.com/
Bandsintown API: http://www.artists.bandsintown.com/bandsintown-api
moment: https://www.npmjs.com/package/moment

### **Author(s):**

David Wilson
