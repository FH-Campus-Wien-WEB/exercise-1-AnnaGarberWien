const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies =[
    {Title:"Avatar",
      Released:"2009-12-18",
      Runtime:'162 min',
      Genres:"Action, Adventure, Fantasy",
      Directors:"James Cameron",
      Writers:"James Cameron",
      Actors:"Sam Worthington, Zoe Saldaña, Sigourney Weaver",
      Plot:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Poster:"https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore:83,
      imdbRating:7.9},
    {Title:"Titanic",
      Released:"2012-4-15",
      Runtime:"195 min",
      Genres:"Drama, Romance",
      Directors:"James Cameron",
      Writers:"James Cameron",
      Actors:"Leonardo DiCaprio, Kate Winslet",
      Plot:"\"God Himself could not sink this ship!\" boasted the head of White Star Line, the shipping company that built the Titanic, and yet on 14 April 1912, the liner sank only 2 hours and forty minutes after hitting an iceberg in the Atla...",
      Poster:"https://m.media-amazon.com/images/M/MV5BNDkzZjVjNzMtNDYzMS00Njc0LWE1ZDgtN2JiNzI5YmY0YzBkXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore:75,
      imdbRating:7.9},
    {Title:"Harry Potter and the Deathly Hallows: Part 2",
      Released:"2011-7-15",
      Runtime:'130 min',
      Genres:"Adventure, Family, Fantasy",
      Directors:"David Yates",
      Writers:"Steve Kloves, J.K. Rowling",
      Plot:"Harry, Ron and Hermione set out on a quest to eliminate the remaining horcruxes. On the other hand, the students and teachers must unite to defend Hogwarts against Lord Voldemort and his army.",
      Poster:"https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore:85,
      imdbRating:8.1,}
  ];
  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

