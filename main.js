
async function fetchResponse() {
  let response = await fetch('https://react-learnwords-example.herokuapp.com/words')
  let content = await response.json()
  content = content.splice(0, 9)

  let picturs = document.querySelector('.picturs')

  let key;
  for (key in content) {
    picturs.innerHTML += `
      <a href="#" class="btn__img" data-pict="pic"><img src="https://react-learnwords-example.herokuapp.com/${content[key].image}" alt="picture" class="${content[key].image}"></img></a>
    ` 
  }
}

fetchResponse()



function _createModal (options) {
  const modal = document.createElement('div')
  modal.classList.add('rmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay" data-close="true">
      <div class="modal__window">
        <div class="modal__header">
          ${options.closable ? `<span class="modal__close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal__body">
          ${options.content || ''}
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal)
  // console.log($.modal);
  return modal
}

$.modal = function(options) {
  const ANIMATION__SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        return console.log('modal is destroyed')
      }
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hiden')
      setTimeout(() => {
        $modal.classList.remove('hiden')
        closing = false
      }, ANIMATION__SPEED)
    },
  }

  const listiner = event => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }
  
  $modal.addEventListener('click', listiner)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listiner)
      destroyed = true
    }
  })
}



// const modal = $.modal({
//   closable: true,
//   content: '',
//   width: '600px'
// })


// document.addEventListener('click', event => {
//   event.preventDefault()
//   const dataimg = event.target.dataset.pict
//   if (dataimg === 'pic') {
//     console.log('pic');
//     // modal.open
//   }
// })


// $.modal()
