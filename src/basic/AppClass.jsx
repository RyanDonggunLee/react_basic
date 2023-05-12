export default class AppClass extends React.Component {
  state = { count: 0 }; //멤버 변수에 객체를 할당 후 state로 지정

  onClick = () => {
    this.setState({ count: this.state.count + 1 }); //클래스 멤버에 setState이라는 리액트에서 제공하는 함수를 사용
  };

  componentDidMount() {
    console.log("Component has been mounted.");
  }

  componentWillUnmount() {
    console.log("Component will be unmounted.");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? "🔥" : "❄️"}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
