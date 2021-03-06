# **Liri Node.js App:**

### **Project Description:**

A Node.js application designed to be run inside Command Prompt or Git Bash windows. The app takes user input to see movie or song information from API queries.

### **Getting Started:**

See prerequisites and installation section first. <br/>

When you have installed all the necessary files and obtained your Spotify Id and Secret, use the following commands in your Command Prompt or Git Bash window:

node liri spotify-this-song "your desired song query" <br/>
node liri movie-this "your desired movie title" <br/>
node liri concert-this "your desired artist name" <br/>
node liri do-what-it-says (reads content from a text file content and makes a query)

### **How to Use:**

Open the liri app folder in your terminal: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp1.png)

How to look up a song from Spotify: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp2.png)

Your result: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp3.png)

How to look up a movie from OMDB: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp4.png)

Your result: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp5.png)

How to look up a concert for an artist: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp6.png)

Your result: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp7.png)

How to read and execute a command from the txt file: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp8.png)

Your result: <br/>
![Liri App Photo](https://github.com/Moldysmurf38/liri-node-app/blob/master/Example_Images/liriapp9.png)

### **Prerequisites:**

Runs in Command Prompt or Git Bash.

You will need to obtain your own Spotify API client ID and Secret (see api docs here: https://developer.spotify.com/documentation/web-api/). create a file in the base directory of the app and name it keys.js

Put both into a file keys.js like so: <br/>
exports.spotify = { <br/>
  id: [Your Spotify Id goes here], <br/>
  secret: [Your Spotify Secret goes here] <br/>
};

You will need to get your own BandsInTown API key here: https://manager.bandsintown.com/support/bandsintown-api

Create a file named .env inside the main directory of the app.

Inside the .env file, type out the following: <br/>
BANDSINTOWN_API="[Your BandsInTown api key goes here]"

### **Installing:**

Open the base directory of the app inside your Command Prompt or Git Bash window. Type into the window the command: npm install. Wait for all the required npm packages to be installed, before typing the user commands listed in the Get Started section.

### **Future Features:**

Create a version that can be deployed on heroku with a UI <br/>
Add more APIs for different user queries <br/>

### **Built With:**

Axios: https://www.npmjs.com/package/axios <br/>
Spotify API : https://www.npmjs.com/package/node-spotify-api <br/>
OMDB API: http://www.omdbapi.com/ <br/>
Bandsintown API: http://www.artists.bandsintown.com/bandsintown-api <br/>
moment: https://www.npmjs.com/package/moment <br/>
dotenv: https://www.npmjs.com/package/dotenv

### **Author(s):**

David Wilson
