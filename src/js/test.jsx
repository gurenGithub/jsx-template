import {Dom, JSX} from 'trouble';
import CM from './cm';
//console.log(React, ReactDOM)

let helloword = '我是来测试的';

let app = document.getElementById('app');
let App = () => {
  let list = [1, 2, 3, 4];

  let test = 'test123';
  return (
    <div ref="test">
      s<span>s55s</span>
      {helloword}
      <CM xxx={test} />
      {list.map(el => {
        return <a>{el}</a>;
      })}
    </div>
  );
};


let result = App();

console.log(result);
Dom.render(result, app);
