export {
  default as Component
}
  from './component'
export {
  default as Dom
}
  from './dom'

function createElement(Tag, attrs, ...children) {
  if (Tag.prototype && Tag.prototype.render) {
    return new Tag(attrs)

    // 函数定义组件
  } else if (typeof tag === 'function') {
    return Tag(attrs || {})
  }

  return {
    tag: Tag,
    attrs,
    children
  }
}

export const JSX = createElement
const members = {
  createElement
}

export default members
