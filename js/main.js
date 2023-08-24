//Example fetch using pokemonapi.co
document.querySelector('#add').addEventListener('click', getFetch)
document.querySelector('#clear').addEventListener('click', clearBooks)

document.querySelector('h3').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  let num = `ISBN:${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        console.log(data.title)
        // if(data.media_type === "image"){
        //   document.querySelector('img').src = data[0].thumbnail_url
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }else{
        //   alert('Media Not Supported - Contact NASA IMMEDIATLY')
        // }
        let books = localStorage.getItem('books') + " ; " + data.title;
        localStorage.setItem('books', books)
        document.querySelector('h3').innerText = localStorage.getItem('books')
        // document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function clearBooks() {
  localStorage.clear();
  document.querySelector('h3').innerText = ""
}