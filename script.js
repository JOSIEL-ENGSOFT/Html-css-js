const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results"); 

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    performSearch(searchTerm);
  } else {
    searchResults.innerHTML = "<p>Digite um termo de pesquisa.</p>";
  }
});

function performSearch(searchTerm) {
  // This is where you would implement the actual search logic
  // You'll need to replace this with your search API calls or data processing
  // For now, we'll just display a placeholder message
  searchResults.innerHTML = `Resultados da pesquisa para "${searchTerm}":`;

  // Add code to fetch data from your library database/API here
  // Example:
  fetch('/search?query=' + searchTerm)
    .then(response => response.json())
    .then(data => displaySearchResults(data));
}

function displaySearchResults(data) {
  searchResults.innerHTML = ''; //Clear previous results

  for (const result of data) {
    searchResults.innerHTML += `
      <div>
         <h2>${result.title}</h2>
         <p>by ${result.author}</p>
         <a href="${result.link}">${result.link}</a>
      </div>
     `;
  }
}