window.addEventListener('hashchange', navigator, false)
window.addEventListener('DOMContentLoaded', navigator, false)
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
    
}


function HomePage() {
    console.log('Home');
    getTrendingMoviesPreview();
    getCategoriesPreview();
    
}
function CategoriesPages() {
    console.log('category');
    
}
function MoviePages() {
    console.log('Movie');
    
}
function SearchPages() {
    console.log('Search');
    
}
function TrendsPages() {
    console.log('TRENDS');
    
}