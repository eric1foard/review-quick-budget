import React, { Component } from 'react';

// This can be deleted, just keeping temporarily for reference.

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.greeting}</p>
      </div>
    )
  }
}

export default Test;
