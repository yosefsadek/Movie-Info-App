const key = '4c1ab0de';
// const movie = 'the wolverine'
let startPage = document.querySelector('.start_page');
let result = document.querySelector('.result');

let title = document.querySelector('#title');
let poster = document.querySelector('#poster');
let imdbRating = document.querySelector('#imdbRating');
let rated = document.querySelector('#rated')
let year = document.querySelector('#year');
let runtime = document.querySelector('#runtime');
let genre = document.querySelector('.genre');
let plot = document.querySelector('#plot');
let cast = document.querySelector('#cast');
let director = document.querySelector('#director');
let writer = document.querySelector('#writer');


function handeler(data) {
    console.log(data);
    // Poster
    poster.src = data.Poster;
    // Title
    title.textContent = data.Title;
    // imdbRating
    imdbRating.textContent = data.imdbRating;
    // Rated
    rated.textContent = data.Rated;
    // Year
    year.textContent = data.Year;
    // Runtime
    runtime.textContent = data.Runtime;
    // Director
    director.textContent = data.Director;
    // Writer
    writer.textContent = data.Writer;

    // Genre
    let genreItems = data.Genre.split(', ');

    genreItems.forEach(e => {
        let span = document.createElement('span');
        span.textContent = e;
        genre.appendChild(span);
    });

    // Plot
    plot.textContent = data.Plot;
    // Cast
    cast.textContent = data.Actors;
}

function getMovie() {
    result.classList.remove('hidden');
    startPage.classList.add('hidden');
    let movie = document.querySelector('#movieName').value;

    console.log(movie);

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function (){
        let data = JSON.parse(xmlHttp.responseText);

        handeler(data);
    }

    xmlHttp.open('GET', `https://www.omdbapi.com/?t=${movie}&apikey=${key}`);
    xmlHttp.send();
}