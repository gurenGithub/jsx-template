const setAttribute = (dom, name, value) => {
  // 如果属性名是class，则改回className
  if (name === 'className') name = 'class'

  // 如果属性名是onXXX，则是一个时间监听方法
  if (/on\w+/.test(name)) {
    name = name.toLowerCase()
    dom[name] = value || ''

    // 如果属性名是style，则更新style对象
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || ''
    } else if (value && typeof value === 'object') {
      for (const name in value) {
        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
        dom.style[name] = typeof value[name] === 'number' ? `${value[name]
        }px` : value[name]
      }
    }

    // 普通属性则直接更新属性
  } else {
    if (name in dom) {
      dom[name] = value || ''
    }
    if (value) {
      dom.setAttribute(name, value)
    } else {
      dom.removeAttribute(name, value)
    }
  }
}

function render(vnode, container) {
  const componentNode = vnode
  if (vnode.isComponent) {
    const component = vnode
    if (component._container) {
      if (component.componentWillUpdate) {
        component.componentWillUpdate() // 更新
      }
    } else if (component.componentWillMount) {
      component.componentWillMount() // 挂载
    }

    component._container = container // 保存父容器信息，用于更新
    vnode = component.render() //  render()返回的结果才是需要渲染的vnode
  }

  if (vnode instanceof Array) {
    return vnode.map(child => render(child, container))

    // return
  }
  if (vnode === undefined) return

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }

  const dom = document.createElement(vnode.tag)

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key]
      setAttribute(dom, key, value)
    })
  }

  vnode.children.forEach(child => render(child, dom))
  if (componentNode.isComponent) {
    componentNode.intrinsic && componentNode.intrinsic(vnode, dom)
  }
  const result = container.appendChild(dom)

  return result
}

const mounted = (vnode) => {
  if (vnode.isComponent) {
    vnode.mounted()
  }

  if (vnode.children instanceof Array) {
    vnode.children.forEach(child => mounted(child))
  }

  // if(typeof )
}
const Dom = {
  render: (vnode, container) => {
    container.innerHTML = ''
    const result = render(vnode, container)
    mounted(vnode)
    return result
  }
}

export default Dom
