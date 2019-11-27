import {
  Dom
} from './index'
import setRefs from './refs'

class Component {
  constructor(props = {}) {
    this.isComponent = true
    this.state = {}
    this.$refs = {}
    this.props = props
  }

  getState() {

    // let me=this;
  }

  setState(stateChange) {
    // 将修改合并到state
    Object.assign(this.state, stateChange)
    if (this._container) {
      Dom.render(this, this._container)
    }
  }

  renderCompleted(vnode, dom) {
    setRefs(dom, this)
  }

  mounted() {

    // console.log('mounted')
  }

  intrinsic(vnode, dom) {
    setRefs(dom, this)
  }
}

export default Component
