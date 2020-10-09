import { getAllDataJs } from './lib'

export function setupNavigation() {
  const pages = getAllDataJs('page')
  const navButtons = getAllDataJs('navButtons')
  const navIcons = getAllDataJs('navIcon')

  navButtons.forEach((navButton) => {
    navButton.addEventListener('click', handleNavClick)
  })

  function handleNavClick(event) {
    const navItem = event.currentTarget
    const targetName = navItem.dataset // 'home' or 'bookmarks' etc.
    updateNavitems(targetName)
    updateNavicons(targetName)
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

  function updateNavicons(targetName) {
    navIcons.forEach((navIcon) => {
      navIcon.classList.toggle(
        'footer__icon--active',
        navIcon.dataset.name === targetName.name
      )
    })
  }

  function updatePages(targetName) {
    pages.forEach((page) => {
      page.classList.toggle('d-none', page.dataset.name !== targetName.name)
    })
  }
}

/**
 * 
 *   const bookmarks = getAllDataJs('bookmark')

  bookmarks.forEach((bookmark) => {
    //console.log(bookmark)
    bookmark.addEventListener('click', handleBookmarkClick)
  })

  function handleBookmarkClick(event) {
    event.currentTarget.classList.toggle('card__bookmark--active')
  }
 */
