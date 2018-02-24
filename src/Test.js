import React from "react";
const titleStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Test extends React.Component {
  state = {
    list: ["gello", "hello", "ugu"],
    counter: 1,
    text: " "
  };
  handleButtonClick = () => {
    console.log("click");
    this.setState({ counter: this.state.counter + 1 });
  };
  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };
  handleAddShopping = () => {
    const currentList = this.state.list;
    const newList = currentList.concat(this.state.text);
    this.setState({
      list: newList,
      text: "",
      counter: newList.length
    });
  };
  handleAddEnter = e => {
    if (e.key === "Enter") {
      this.handleAddShopping();
    }
  };

  handleRemove = (key) => {
    const currentList = this.state.list
    // list.splice(key, 1);
    const newList = currentList.filter((item, index) => index !== key)
    this.setState({
      list: newList,
      counter: newList.length
    });
  };

  render() {
    return (
      <div>
        Count: {this.state.counter.toString()}
        <br />
        Text: {this.state.text}
        <h3 style={titleStyles}>{this.props.title}</h3>
        <ul>
          {this.state.list.map((item, key) => (
            <li key={item}>
              {item}
              <button
              style={{marginLeft:10, backgroundColor: 'red'}}
               onClick={() => this.handleRemove(key)}>x</button>
            </li>
          ))}
        </ul>
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          onKeyPress={this.handleAddEnter}
        />
        <button onClick={this.handleAddShopping}>Add</button>
      </div>
    );
  }
}
