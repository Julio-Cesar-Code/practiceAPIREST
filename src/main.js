const URLBase = 'https://api.themoviedb.org/3'
const TrendingPreviewMoviesContainer=document.querySelector('#trendingPreview .trendingPreview-movieList')
async function getTrendingMoviesPreview() {
    const response = await fetch(`${URLBase}/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json();
    const movies = data.results;
    console.log(data, movies);
    const moviesList = [];
    movies.forEach(element => {
        //const articleContainer = document.createElement('article');
        //articleContainer.classList.add('trendingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', element.title)
        movieImg.setAttribute(
            'src',
            `https://image.tmdb.org/t/p/w300/${element.poster_path}`);
        movieContainer.appendChild(movieImg);
        //articleContainer.appendChild(movieContainer);
        //moviesList.push(movieContainer);
        
        TrendingPreviewMoviesContainer.appendChild(movieContainer);
    });





    
}
getTrendingMoviesPreview();