 const global = {
  currentPage: window.location.pathname
};

async function displayPopularMovies() {
  const result = await fetchAPIData('movie/popular');

  console.log(result);
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/`;

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

  const data = await response.json();

  return data;
}

// Highlight activr link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    } else if (global.currentPage == '/index.html') {
      document.querySelector('.nav-link').classList.add('active');
    }
  });
}

// Init app
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displayPopularMovies();
      console.log('home');
      break;
    case '/shows.html':
      console.log('shows');
      break;
    case '/movie-details.html':
      console.log('movie-details');
      break;
    case '/tv-details.html':
      console.log('tv-details');
      break;
    case '/search.html':
      console.log('search');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);