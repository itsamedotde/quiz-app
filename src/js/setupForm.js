import { getDataJs } from './lib'

export function setupForm() {
  /********************* RESET FORM ***********************/

  const mForm = getDataJs('form')
  mForm.addEventListener('submit', (e) => {
    e.preventDefault()
    mForm.reset()
  })
}
