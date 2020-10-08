export function getElement(selector) {
  return document.querySelector(selector)
}

export function getDataJs(name) {
  const dataSelector = '[data-js=' + name + ']'
  return document.querySelector(dataSelector)
}

export function getDataJsAll(name) {
  const dataSelector = '[data-js=' + name + ']'
  return document.querySelectorAll(dataSelector)
}

/// hide element
/// show element
///
