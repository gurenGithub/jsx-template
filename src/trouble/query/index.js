import Dom from './dom'
import Types from './../utils/types'

class Query {
  constructor(dom) {
    this.dom = dom
  }

  setHtml(html) {
    this.dom.innerHTML = html
    return this.slef()
  }

  getHtml() {
    return this.dom.innerHTML
  }

  slef() {
    return new Query(this.dom)
  }

  setClass(options) {
    if (Types.isString(options)) {
      this.setAttribute('class', options)
    } else if (options instanceof Array) {
      const classNames = []
      options.map(el => {
        if (Types.isString(el)) {
          classNames.push(el)
        } else if (Types.isObject(el)) {
          for (const key in el) {
            const value = el[key]
            if (Types.isString(value)) {
              classNames.push(value)
            } else if (Types.isBoolean(value)) {
              if (value) {
                classNames.push(key)
              }
            } else {
              if (value) {
                classNames.push(key)
              }
            }
          }
        }
      })

      this.setAttribute('class', classNames)
    }
  }

  addClass(name) {
    let className = this.getClass()
    className = className.replace(new RegExp(name, 'gi'), '')
    className += ` ${name}`
    this.setClass(className)
  }

  getClass() {
    return this.getAttribute('class')
  }

  hide() {
    this.dom.style.display = 'none'
    return this.slef()
  }

  setAttribute(name, value) {
    this.dom.setAttribute(name, value)

    return this.slef()
  }

  getAttribute(name) {
    this.dom.getAttribute(name)
    return this.slef()
  }

  getDom() {
    return this.dom
  }

  show() {
    this.dom.style.display = 'block'

    return this.slef()
  }

  append(vNode) {
    if (vNode.isComponent) {
      Dom.render(vNode, this.dom)
    } else {
      this.dom.appendChilid(vNode)
    }

    return this.slef()

    // this.dom.appendChilid(children);
  }

  static create(dom) {
    return new Query(dom)
  }
}

export default Query
