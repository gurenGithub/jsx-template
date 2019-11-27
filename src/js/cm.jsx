import { Dom, JSX, Component } from "trouble";
class CM extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    //console.log('componentWillMount');
  }
  
  render() {
    // console.log('render');
    return (
      <div ref="my"
        onClick={() => {
          alert(this.props.xxx);
        }}
      >
        <span ref="test">日了狗</span>{this.props.xxx}
      </div>
    );
  }
  mounted(){

    //this.$refs.my.setAttribute('innerHTML','222');//='222';
  }
}

export default CM;
