import React, { Component } from "react";
import { UserInput } from "./Components/userInput/userInput";
import { UserOutput } from "./Components/userOutput/userOutput";
import { CharComponent } from "./Components/charComponent/CharComponent";
import "./styles.css";

class App extends Component {
  state = {
    textValue: "",
    copy: ""
  };

  handleClick = (idx) => {
    let value = this.state.copy.split("");
    value.splice(idx, 1);
    this.setState({ copy: value.join("") });
  };

  handleOnChnage = (value) => this.setState({ textValue: value, copy: value });

  renderingContent = () => {
    let content = (
      <div>
        <div className="ui card">
          <div className="content">
            <div className="center aligned header">{this.state.textValue}</div>
            <div className="center aligned description">
              <UserInput
                value={this.state.textValue}
                handleChange={(e) => this.handleOnChnage(e.target.value)}
              />
            </div>
          </div>
          <div className="extra content">
            <div className="center aligned author">
              <UserOutput value={this.state.textValue} />
            </div>
          </div>
        </div>
        <div className="ui basic green button">
          {" "}
          Start typing...click the below boxes to Vanish
        </div>
        <hr />
        <div className="ui six cards">
          <CharComponent
            value={this.state.copy}
            deleteChar={this.handleClick}
          />
        </div>
      </div>
    );

    return content;
  };

  render() {
    return (
      <div className="App ui container">
        <h1> React Demo Project 5</h1>
        <div className="content">{this.renderingContent()}</div>
      </div>
    );
  }
}

export default App;
