searchFormBtn.addEventListener('click', () => {

  location.hash = "#search="+searchFormInput.value;
});

trendingBtn.addEventListener('click', () => {
  location.hash = "#trends";
});

arrowBtn.addEventListener('click', () => {
    history.back();
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);


function navigator() {
    console.log({ location });
    if (location.hash.startsWith('#trends')) {
        TrendsPages();
    } else if (location.hash.startsWith('#search=')) {
        SearchPages();
    } else if (location.hash.startsWith('#movie=')) {
        MoviePages();
    } else if (location.hash.startsWith('#category=')) {
        CategoriesPages();
    } else {
        HomePage();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function HomePage() {
    console.log('Home');
    //settings the view
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    categoriesContainer.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    






    getTrendingMoviesPreview();
    getCategoriesPreview();
    
}
function CategoriesPages() {
    console.log('category');

//settings the view
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');


    headerCategoryTitle.innerHTML = categoryName;


    getMoviesByCategory(categoryId);
}
function MoviePages() {
    console.log('Movie');
    
    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_,MovieId]=location.hash.split('=')
    getMovieId(MovieId);
}
function SearchPages() {
    console.log('Search');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


    //Search
    const [_, query] = location.hash.split('=');
    getMOviesbySearch(query); 
    }
function TrendsPages() {
    console.log('TRENDS');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML='Tendencias'
    getTrendingMovies();
    }