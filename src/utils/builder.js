export const append = (parent, children) => {
  children.map(child => parent.appendChild(child))
  return parent
}

export const createNode = element => document.createElement(element)

export const removeNodeById = elementId => {
  const element = document.getElementById(elementId)
  return element.parentNode.removeChild(element)
}
