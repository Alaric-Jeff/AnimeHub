document.getElementById("search").onclick = function() {
    this.style.width = '300px';
};
document.getElementById("search").onblur = function() {
    this.style.width = '150px';
};
document.getElementById("browse-btn").onclick = function() {
    var content = document.getElementById("browse-content");
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    }
};
window.onclick = function(event) {
    if (!event.target.matches('#browse-btn')) {
        var dropdowns = document.getElementsByClassName("content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
};
const animeList = [
{ title: "Demon Slayer", link: "demonslayer.html" },
{ title: "Naruto", link: "naruto.html" },
{ title: "Attack on Titan", link: "aot.html" },
{ title: "One Piece", link: "onepiece.html" },
{ title: "My Hero Academia", link: "myheroacademia.html" },
{title: "Death Note", link: "deathnote.html"},
{title: "Your Name", link: "yourname.html"},
{title: "Sousou no Frieren", link: "frieren.html"},
{title: "Dr. Stone", link: "drstone.html"},
{title: "Mushoku Tensei", link: "mushoku.html"},
{title: "Gotoubon no Hanayome", link: "5toubun.html"},
{title: "Konosuba", link: "konosuba.html"},
{title: "Grand Blue", link: "grandblue.html"}
];
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");
function performSearch(query) {
    const results = animeList.filter(anime => anime.title.toLowerCase().includes(query.toLowerCase()));
    return results;
}
function displayResults(results) {
    searchResults.innerHTML = "";
    if (results.length === 0) {
        searchResults.innerHTML = "No results found.";
    } else {
        results.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.textContent = result.title;
            resultItem.addEventListener("click", function() {
                window.location.href = result.link;
            });
            searchResults.appendChild(resultItem);
        });
    }
    searchResults.style.display = results.length ? 'block' : 'none';
}
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    const results = performSearch(query);
    displayResults(results);
});
searchInput.addEventListener("input", function() {
    const query = this.value.trim();
    const results = performSearch(query);
    displayResults(results);
});
window.addEventListener("click", function(event) {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
        searchResults.style.display = "none";
    }
});