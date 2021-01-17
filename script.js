const dataContainer = document.querySelector(".data");
const url = "https://rickandmortyapi.com/api/character/";

fetch(url)

.then(response => response.json())
.then(data => {
    createHtml(data);
  console.log('Working:', data);
})
  .catch(err => {
    console.error(err);
});

function createHtml(data) {
  const results = data.results;
    
  dataContainer.innerHTML = "";
  
    for(let i = 0; i < results.length; i++) {
        if(i === 5) {
            break;
        }
        dataContainer.innerHTML += `<a href="details.html?id=${results[i].id}" class="card">
        <div>
        <p class="quote">${results[i].name}</p>
        <p class="quote">Id: ${results[i].id}</p>
        <img src="${results[i].image}" />
        </div>
        </a>

        `;
    }
};