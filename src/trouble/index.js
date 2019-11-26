export {
    default as Component
}
from './component';
export {
    default as Dom
}
from './dom';

function createElement(tag, attrs, ...children) {

    if (tag.prototype && tag.prototype.render) {
        return new tag(attrs);
        // 函数定义组件
    } else if (typeof tag === 'function') {
        return tag(attrs || {});
    }

    return {
        tag,
        attrs,
        children
    }
}

export const JSX=createElement;
const members = {
    createElement
}



export default members;
/*
function tick() {
  const element = (
      <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  ReactDOM.render(
      element,
      document.getElementById( 'root' )
  );
}

setInterval( tick, 1000 );
*/