const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint).then(unrefineData => unrefineData.json()).then( data => cities.push(...data))

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    let keyword = new RegExp(wordToMatch,"gi");
    return place.city.match(keyword)||place.state.match(keyword)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches(){

  if (this.value===""){ return suggestions.innerHTML=""}
  //attempt to transition new content in by toggling class
  // suggestions.setAttribute("class","suggestions hide")
  // setTimeout(()=>{
    const matchArray = findMatches(this.value,cities)
    const html = matchArray.map((place)=>{

      const match = new RegExp(this.value,"gi")
      const cityName = place.city.replace(match,`<span class="h1">${this.value}</span>`)

      const stateName = place.state.replace(match,`<span class="h2">${this.value}</span>`)

      return `<li>
                <span class="name">${cityName} , ${stateName}</span>
                <span class="population"> ${numberWithCommas(place.population)}</span>
              </li> `;
    }).join('');
    suggestions.innerHTML = html
    //attempt to transition new content in
    // suggestions.setAttribute("class","suggestions")
  // },500)

}

const searchInput =
document.querySelector('.search')
console.log(searchInput)
const suggestions = document.querySelector(".suggestions")


searchInput.addEventListener("change",displayMatches)
searchInput.addEventListener("keyup",displayMatches)
