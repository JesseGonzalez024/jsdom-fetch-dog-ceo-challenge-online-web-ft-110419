console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function imageFetcher() {
  return fetch(imgUrl)
  .then(resp => console.log(resp))

  
}

