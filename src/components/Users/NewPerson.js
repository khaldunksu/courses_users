import React, { Component } from "react";

class NewPerson extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const username = form.elements["username"].value;
    this.props.addPerson(name, email,username);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div class="ui input">
        <input
          id="name"
          type="text"
          defaultValue=""
          placeholder="Name..."
          required
        />
        </div> 
        <div class="ui input">
        <input
          id="email"
          type="text"
          defaultValue=""
          placeholder="Email..."
          required
        />
        </div>
        <div class="ui input">
         <input
          id="username"
          type="text"
          defaultValue=""
          placeholder="user_name"
        />
        </div>
        <button class="ui basic button" 
        type="submit">
  <i class="icon user"></i>
  Add 
</button>
      </form>
    );
  }
}

export default NewPerson