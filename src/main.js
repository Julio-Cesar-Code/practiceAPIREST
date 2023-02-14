const URLBase = 'https://api.themoviedb.org/3'
const TrendingPreviewMoviesContainer=document.querySelector('#trendingPreview .trendingPreview-movieList')
const categoriesContainer=document.querySelector('#categoriesPreview')
async function getTrendingMoviesPreview() {
    const response = await fetch(`${URLBase}/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json();
    const movies = data.results;
    console.log(data, movies);
    
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
async function getCategoriesPreview() {
    const response = await fetch(`${URLBase}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    const categories = data.genres;
    console.log(data, categories);
    const MaintitleCategory = document.createElement('h2');
    MaintitleCategory.classList.add('categoriesPreview-title');
    const titlecontent = document.createTextNode('Categorías');
    MaintitleCategory.appendChild(titlecontent);
    categoriesContainer.appendChild(MaintitleCategory);
    const articleCategoryContainer = document.createElement('article');
    articleCategoryContainer.classList.add('categoriesPreview-list')
    categoriesContainer.appendChild(articleCategoryContainer);

    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        
        categoryContainer.classList.add('category-container');

        const titleCategory = document.createElement('h3');
        titleCategory.classList.add('category-title');
        titleCategory.setAttribute('id', `id${category.id}`)
        const titleCategoryContent = document.createTextNode(`${category.name}`);
        titleCategory.appendChild(titleCategoryContent);
        
        categoryContainer.appendChild(titleCategory);
    
        articleCategoryContainer.appendChild(categoryContainer)
}   )





    
}
getTrendingMoviesPreview();
getCategoriesPreview();