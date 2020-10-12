import { getAllDataJs, getDataJs } from './lib'

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
    updateTitles(targetName)
  }

  function updateTitles(targetName) {
    console.log('target = ' + targetName.name)
    let title
    switch (targetName.name) {
      case 'index':
        title = 'quiz-app'
        break
      case 'create':
        title = 'New Question'
        break
      case 'bookmarks':
        title = 'Bookmarks'
        break
      case 'profile':
        title = 'Profile'
        break
      default:
        title = 'quiz-app'
    }
    getDataJs('headerTitle').innerText = title
    getDataJs('pageTitle').innerText = 'QUIZ-APP - ' + title
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
