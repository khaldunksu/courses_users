import React, { Component } from "react";

class NewCourses extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.elements["title"].value;
    const completed = form.elements["completed"].value;
    const duration = form.elements["duration"].value;
    this.props.addPerson(title, completed, duration);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div class="ui input">
        <input
          id="title"
          type="text"
          defaultValue=""
          placeholder="Name..."
          required
        />
        </div> 
        <div class="ui input">
        <input
          id="completed"
          type="text"
          defaultValue=""
          placeholder="Open/Close..."
          required
        />
        </div>
        <div class="ui input">
         <input
          id="duration"
          type="text"
          defaultValue=""
          placeholder="duration"
        />
        </div>
        <button class="ui basic button" 
        type="submit">
  <i class="keyboard icon"></i>
  Add 
</button>
      </form>
    );
  }
}

export default NewCourses;