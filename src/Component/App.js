import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <center>
          <div class="ui raised card">
            <div class="content">
              <Todo />
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default App;
