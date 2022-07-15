const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
console.log("connection open")
})
.catch(err =>{
    console.log("Oh no error!");
    console.log(err);
})

/* {
    title: 'Amadeus',
    year: 1986,
    score:9.2,
    rating: 'R'
} */

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

 const Movie = mongoose.model('Movie', movieSchema)
//const Amadeus = new Movie({title:'Amadeus', year:1986, score:9.2})

Movie.insertMany([{title: 'Amelie', year:2001, score:8.3, rating:'R'},
{title:'Alien', year:1979, score:8.1, rating:'R'},
{title:'The Iron Giant', year:1999, score:7.5, rating:'PG'}])
.then(data =>{
    console.log('It is working');
    console.log(data)
})
.catch(err =>{
    console.log('OOPs!, its not working');
})