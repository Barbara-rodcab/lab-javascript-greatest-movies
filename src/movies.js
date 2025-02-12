// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map ((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0 ) {
        return 0
    }
    const moviesSteven = moviesArray.filter((movies) => {
        return movies.director.includes('Steven Spielberg') && movies.genre.includes ("Drama")
    })
 return moviesSteven.length
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoreValue = moviesArray.reduce((acc, movies) => {
        return movies.score ? acc + movies.score : acc
    }, 0) 
    
    if (moviesArray.length === 0 ) {
        return 0
    }

    const avgMovies = scoreValue / moviesArray.length 
return Number(avgMovies.toFixed(2))
}
// to.Fixed () _ metodo para poner decimales _ 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter((movies) => {
    return movies.genre.includes ("Drama")
})
if (dramaMovies.length === 0) {
    return 0
}

const scoreDrama = dramaMovies.reduce ((acc , movies) => {
    return  acc + movies.score 
}, 0 )

const avgDramaScore = scoreDrama / dramaMovies.length 
return Number(avgDramaScore.toFixed(2))
   }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const clonnedMoviesArray = moviesArray.slice (0 , moviesArray.length)

  const sortedMoviesArray = clonnedMoviesArray.sort((movie1 , movie2) => {
        if ( movie1.year > movie2.year){
            return 1;
        } else if (movie1.year < movie2.year) {
            return -1;
          } 
// no creo la condicion del 0 (igual año) para que pueda avanzar al siguiente IF

        if ( movie1.title > movie2.title){
            return 1;
        } else if (movie1.title < movie2.title) {
            return -1;
          }  else {
            return 0
          }

    })
return sortedMoviesArray
   }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
