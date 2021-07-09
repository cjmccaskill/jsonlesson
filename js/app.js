// select the main tag, the palce where our movie will go
const $main = $("main");

// Asynchronous Request for the Data in our JSON
$.ajax("./json/data.json")
  // when the data arrives, do something with it
  .then((data) => {
    // loop over the array of the movies
    data.forEach((movie, index) => {
      const $div = $("<div>"); //create new div to display movie info
      $div.html(`<h2 class ='movie-title'>${movie.title}</h2>
        <h3 class ='movie-release'>${movie.release_year}</h3>
        <img src ='${movie.image}'/>`);

        $main.append($div) //append the div to the main tag
    });
  })
  .catch((error) => console.log(error));
