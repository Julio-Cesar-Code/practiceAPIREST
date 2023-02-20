
//const TrendingPreviewMoviesContainer=document.querySelector('#trendingPreview .trendingPreview-movieList')
// const categoriesContainer = document.querySelector('#categoriesPreview')
const APIAXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});
//Utils
function CreateMovies(movies, container) {
    container.innerHTML=''
    movies.forEach(element => {
        //const articleContainer = document.createElement('article');
        //articleContainer.classList.add('trendingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        movieContainer.addEventListener('click', () => {
            location.hash = '#movie=' + element.id;
        })

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', element.title)
        movieImg.setAttribute(
            'src',
            `https://image.tmdb.org/t/p/w300/${element.poster_path}`);
        movieContainer.appendChild(movieImg);
        //articleContainer.appendChild(movieContainer);
        //moviesList.push(movieContainer);
        
        container.appendChild(movieContainer);
    });
}
function CreateCategories(categories, container) {
    
    categories.forEach(category => {
    const categoryContainer = document.createElement('div');
    
    categoryContainer.classList.add('category-container');

    const titleCategory = document.createElement('h3');
    titleCategory.classList.add('category-title');
    titleCategory.setAttribute('id', `id${category.id}`)
    titleCategory.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}`
    })
    const titleCategoryContent = document.createTextNode(`${category.name}`);
    titleCategory.appendChild(titleCategoryContent);
    
    categoryContainer.appendChild(titleCategory);

    container.appendChild(categoryContainer)
}   )
}

//llamados a la API
async function getTrendingMovies() {
    const {data} = await APIAXIOS('trending/movie/day');
    
    const movies = data.results;
    console.log(data, movies);
    // TrendingPreviewMoviesContainer.innerHTML = '';
    // movies.forEach(element => {
    //     //const articleContainer = document.createElement('article');
    //     //articleContainer.classList.add('trendingPreview-movieList')
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container');

    //     const movieImg = document.createElement('img');
    //     movieImg.classList.add('movie-img');
    //     movieImg.setAttribute('alt', element.title)
    //     movieImg.setAttribute(
    //         'src',
    //         `https://image.tmdb.org/t/p/w300/${element.poster_path}`);
    //     movieContainer.appendChild(movieImg);
    //     //articleContainer.appendChild(movieContainer);
    //     //moviesList.push(movieContainer);
        
    //     TrendingPreviewMoviesContainer.appendChild(movieContainer);
    // });


    CreateMovies(movies, genericSection);


    
}
async function getTrendingMoviesPreview() {
    const {data} = await APIAXIOS('trending/movie/day');
    
    const movies = data.results;
    console.log(data, movies);
    // TrendingPreviewMoviesContainer.innerHTML = '';
    // movies.forEach(element => {
    //     //const articleContainer = document.createElement('article');
    //     //articleContainer.classList.add('trendingPreview-movieList')
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container');

    //     const movieImg = document.createElement('img');
    //     movieImg.classList.add('movie-img');
    //     movieImg.setAttribute('alt', element.title)
    //     movieImg.setAttribute(
    //         'src',
    //         `https://image.tmdb.org/t/p/w300/${element.poster_path}`);
    //     movieContainer.appendChild(movieImg);
    //     //articleContainer.appendChild(movieContainer);
    //     //moviesList.push(movieContainer);
        
    //     TrendingPreviewMoviesContainer.appendChild(movieContainer);
    // });


    CreateMovies(movies, TrendingPreviewMoviesContainer);


    
}
async function getCategoriesPreview() {
    const {data} = await APIAXIOS(`genre/movie/list`);
    //onst data = await response.json();
    const categories = data.genres;
    console.log(data, categories);
    categoriesContainer.innerHTML = '';
    const MaintitleCategory = document.createElement('h2');
    MaintitleCategory.classList.add('categoriesPreview-title');
    const titlecontent = document.createTextNode('Categorías');
    MaintitleCategory.appendChild(titlecontent);
    categoriesContainer.appendChild(MaintitleCategory);
    const articleCategoryContainer = document.createElement('article');
    articleCategoryContainer.classList.add('categoriesPreview-list')
    categoriesContainer.appendChild(articleCategoryContainer);
    CreateCategories(categories, categoriesContainer);






    
}


async function getMOviesbySearch(query) { 

    const { data } = await APIAXIOS('search/movie',{
        params: {
            query,
        }
    });
    
    const movies = data.results;
    console.log(data, movies);
    CreateMovies(movies, genericSection);
    
}

async function getMoviesByCategory(id) {
    const { data } = await APIAXIOS('discover/movie',{
        params: {
            with_genres: id,
        }
    });
    
    const movies = data.results;
    console.log(data, movies);
    CreateMovies(movies, genericSection);
    // genericSection.innerHTML = '';
    // movies.forEach(element => {
    //     //const articleContainer = document.createElement('article');
    //     //articleContainer.classList.add('trendingPreview-movieList')
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container');

    //     const movieImg = document.createElement('img');
    //     movieImg.classList.add('movie-img');
    //     movieImg.setAttribute('alt', element.title)
    //     movieImg.setAttribute(
    //         'src',
    //         `https://image.tmdb.org/t/p/w300/${element.poster_path}`);
    //     movieContainer.appendChild(movieImg);
    //     //articleContainer.appendChild(movieContainer);
    //     //moviesList.push(movieContainer);
        
    //     genericSection.appendChild(movieContainer);
    // });





    
}
async function getMovieId(id) {
    const { data:movie } = await APIAXIOS('movie/' + id);
    const movieImgURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    console.log(movieImgURL);
	headerSection.style.background = `
    linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 19.27%,
        rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgURL})
    `;
    
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    CreateCategories(movie.genres, movieDetailCategoriesList);

    getRetaledMoviesById(id);
}

async function getRetaledMoviesById(id) {
    const { data } = await APIAXIOS(`movie/${id}/recommendations`);
    const relatedMovies = data.results;

    CreateMovies(relatedMovies, relatedMoviesContainer)
    relatedMoviesContainer.scrollTo(0, 0);
}