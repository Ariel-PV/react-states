import React from "react";
import Table from "./Table";

class App extends React.Component {
  state = {
    characters: [
      {
        name: 'John',
        job: 'Smithery',
      },
      {
        name: 'Clide',
        job: 'Carpinter',
      },
      {
        name: 'Wanda',
        job: 'Engineer',
      },
      {
        name: 'Claudia',
        job: 'Manager',
      },
    ],
  };

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((char, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;

    return(
      <div className="container">
        <table characters={characters} removeCharacter={this.removeCharacter}/>
      </div>
    );
  }
  
}

export default App;
