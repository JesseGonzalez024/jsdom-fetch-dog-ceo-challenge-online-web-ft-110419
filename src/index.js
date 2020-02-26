console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function imageFetcher() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImage(json))
}

function breedFetcher() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json))
}

function renderImage(json) {
  json.message.forEach(link => {
    let image = document.createElement("img")
    image.src = link
    document.querySelector('#dog-image-container').appendChild(image)
  })
}

function renderBreeds(json){
    let breeds = json.message
    for(breed in breeds) {
      let element = document.createElement("li")
      element.textContent = breed
      document.querySelector('#dog-breeds').appendChild(element)
      element.addEventListener('click', changeColor) 
  }
}

function changeColor(event){
    event.target.style.color = 'red'

}

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
})