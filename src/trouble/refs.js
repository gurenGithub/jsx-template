const refs = (vNode, me) => {

  //console.log(222);
  let setRef = (el) => {

    if (el && el.getAttribute && el.getAttribute('ref')) {

      let ref = el.getAttribute('ref');

      if (!me.$refs[ref]) {
        me.$refs[ref] = el;
      } else {

        if (!me.$refs[ref] instanceof Array) {
          me.$refs[ref] = [me.$refs[ref]];
        } else {
          me.$refs[ref].push(el);
        }

      }

    }

  }

  setRef(vNode);
  let setRefs = (children) => {

    for (let i = 0; i < children.length; i++) {

      let el = children[i];

      // children.map(el => {

      setRef(el);

      if (el && el.childNodes && el.childNodes in Array) {
        let childrens = el.childNodes;
        if (childrens) {
          setRefs(childrens)
        }
      }


    } //)

  }

  if (vNode && vNode.childNodes) {
    setRefs(vNode.childNodes);
  }

}

export default refs;