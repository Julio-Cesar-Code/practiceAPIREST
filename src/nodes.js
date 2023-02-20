//Function
const Selector = (id) => document.querySelector(id);
// Sections
const headerSection = Selector('#header');
const trendingPreviewSection = Selector('#trendingPreview');
const categoriesContainer = Selector('#categoriesPreview');
const genericSection = Selector('#genericList');
const movieDetailSection = Selector('#movieDetail');

// Lists & Containers
const searchForm = Selector('#searchForm');
const TrendingPreviewMoviesContainer = Selector('.trendingPreview-movieList');
const categoriesPreviewList = Selector('.categoriesPreview-list');

const movieDetailCategoriesList = Selector('#movieDetail .categories-list');
const relatedMoviesContainer = Selector('.relatedMovies-scrollContainer');

// Elements
const headerTitle = Selector('.header-title');
const arrowBtn = Selector('.header-arrow');
const headerCategoryTitle = Selector('.header-title--categoryView');

const searchFormInput = Selector('#searchForm input');
const searchFormBtn = Selector('#searchBtn');

const trendingBtn = Selector('.trendingPreview-btn');

const movieDetailTitle = Selector('.movieDetail-title');
const movieDetailDescription = Selector('.movieDetail-description');
const movieDetailScore = Selector('.movieDetail-score');