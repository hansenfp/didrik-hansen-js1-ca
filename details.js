const dataContainer = document.querySelector(".data");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://rickandmortyapi.com/api/character/" + id;

async function getData(){
  try{
    const response = await fetch(url)
    console.log(response)

    const data = response.json()
    console.log(data);
    createHtml(data)


  } catch(error){
    console.log(error)
  }
}
getData()

function createHtml(data) {
  const results = data.results;
    
  dataContainer.innerHTML = "";
  
    for(let i = 0; i < 5; i++) {
        if(i === 5) {
            break;
        }
        dataContainer.innerHTML += `<h1>${results.name}</h1>
        <p class="quote">${results[i].name}</p>
        <p class="quote">Id: ${results[i].id}</p>
        <img src="${results[i].image}" />
        </a>
        


        `;
    }
};
