import { getAllDataJs, getDataJs } from './lib'

export function setupCard() {
  /* BOOKMARKS */
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

/*


  function handleNavClick(event) {
    const navItem = event.currentTarget
    const targetName = navItem.dataset // 'home' or 'bookmarks' etc.
    updateNavitems(targetName)
    updatePages(targetName)
  }

  function updateNavitems(targetName) {
    navButtons.forEach((navButton) => {
      navButton.classList.toggle(
        'footer__link--active',
        navButton.dataset.name === targetName.name
      )
    })
  }

  function updatePages(targetName) {
    pages.forEach((page) => {
      page.classList.toggle('d-none', page.dataset.name !== targetName.name)
    })
  }



*/
