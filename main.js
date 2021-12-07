async function fetchResponse() {
  let response = await fetch('https://react-learnwords-example.herokuapp.com/words')
  let content = await response.json()
  content = content.splice(0, 9)

  let pictures = document.querySelector('.pictures')

  let key;
  for (key in content) {
    pictures.innerHTML += `
      <img src="https://react-learnwords-example.herokuapp.com/${content[key].image}" alt="picture" class="img"></img>
    ` 
  }
}

fetchResponse()
