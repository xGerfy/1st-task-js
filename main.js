const overlay = document.querySelector('.overlay')

const openModal = (src) => {
  const modalImg = document.querySelector('.modal__img')
  modalImg.src = src

  overlay.classList.remove('hide')
}

const hideModal = (event) => {
  console.log(event.target.className);
  if (event.target.className === 'overlay') {
    overlay.classList.add('hide')
  }
}
 overlay.addEventListener("click", hideModal)

async function fetchResponse() {
  let response = await fetch('https://react-learnwords-example.herokuapp.com/words')
  let content = await response.json()
  content = content.splice(0, 9)

  let picturs = document.querySelector('.picturs')

  for (let index = 0; index < content.length; index++) {
    const imageSrc = `https://react-learnwords-example.herokuapp.com/${content[index].image}`

    const imageBox = document.createElement('div')
    imageBox.className= "btn__img"
    imageBox.addEventListener("click", () => openModal(imageSrc))

    const img = document.createElement('img')
    img.alt = "picture"
    img.src = `https://react-learnwords-example.herokuapp.com/${content[index].image}`

    imageBox.append(img)
    picturs.append(imageBox)
  }
}

fetchResponse()