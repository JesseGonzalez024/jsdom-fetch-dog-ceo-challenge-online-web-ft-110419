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
  console.log(json)
}