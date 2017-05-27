import React from "react";
import ReactDOM from "react-dom";
import { createStore} from 'redux';

class Liquid extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Test React</h1>
      </div>
    );
  }
}

const app = document.getElementById('root');

ReactDOM.render(
  <Liquid/>,
app);
