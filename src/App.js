import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class  App extends Component {

  state = {
    persons: [
      { name: "ashish", age: "10" },
      { name: "prince", age: "11" },
      { name: "ajay", age: "12" },
    ],
  };

  nameChangeHandler = (event)=> {


    this.setState({
      persons: [
        { name: event.target.value, age: "100" },
        { name: "prince", age: "11" },
        { name: "ajay", age: "12" },
      ],
    });

////////


  }



  nameSwitchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "100" },
        { name: "prince", age: "11" },
        { name: "ajay", age: "12" },
      ],
    });
  };

  render() {

    const style = {

      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (

      <div className="App">
        <h1>Name and age of few peoples </h1>
        <p>Bahut Thand hai BC</p>
        <button style = {style} onClick={() => this.nameSwitchHandler("Button click....")}>Switch name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {() => this.nameSwitchHandler("Mahadev")}
          changed = {this.nameChangeHandler}
        >
          I am gonna finish it in this month only{" "}
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.nameSwitchHandler.bind(this,"RAM RAM")}
        ></Person>
      </div>
    );

  }
  
};

export default App;
