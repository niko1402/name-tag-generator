import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // JS convention: Use _ to indicate to JS that you aren't using another parameter here, but thus keeping the correct order of params 
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
    // Tell it accept a name as the prop. Add the new name to the aray of name, and ALSO
    // the spread of names in the array so far
  addName = (name) => {
    const addNewName = [name, ...this.state.names]
    this.setState({ names: addNewName });
  };

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={ this.addName }/>
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
