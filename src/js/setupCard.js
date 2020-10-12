import { getAllDataJs, getDataJs } from './lib'

export function setupCard() {
  const cards = getAllDataJs('card')
  cards.forEach((card) => {
    toggleBookmark(card)
    showAnswer(card)
  })

  function toggleBookmark(card) {
    //console.log(card)
    const bookmarkIcon = card.querySelector('[data-js=bookmark]') // kind holen
    bookmarkIcon.addEventListener('click', (event) => {
      event.target.classList.toggle('card__bookmark--active')
      //console.log('toggle')
    })
  }

  function showAnswer(card) {
    const answerText = card.querySelector('[data-js=answer]')
    const showAnswerBtn = card.querySelector('[data-js=answerBtn]')
    //console.log(answerText)
    showAnswerBtn.addEventListener('click', () => {
      //console.log('show answer')
      answerText.classList.toggle('d-none')
      if (showAnswerBtn.innerText.toLowerCase().trim() == 'show answer') {
        //console.log('is show')
        showAnswerBtn.innerText = 'Hide answer'
      } else showAnswerBtn.innerText = 'Show answer'
    })
  }
}

/*
export function setupCard() {
  const bookmarks = getAllDataJs('bookmark')

  bookmarks.forEach((bookmark) => {
    //console.log(bookmark)
    bookmark.addEventListener('click', handleBookmarkClick)
  })

  function handleBookmarkClick(event) {
    event.currentTarget.classList.toggle('card__bookmark--active')
  }

  const answers = getAllDataJs('answerButton')
  const answerButtons = getAllDataJs('answerButton')
  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener('click', handleShowAnswer)
  })

  function handleShowAnswer(event) {
    const navItem = event.currentTarget
    const targetId = navItem.dataset.id
    //console.log(`[data-id=${targetId}][data-name=answer]`)
    const answer = document.querySelector(
      `[data-id="${targetId}"][data-name="answer"]`
    )
    answer.classList.toggle('d-none')
  }
}
*/
