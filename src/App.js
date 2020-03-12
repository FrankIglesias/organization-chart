import React, { Component } from 'react';
import Node from './components/Node';
import { getChief } from './services/organization';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = { chief: {} }
  componentDidMount() {
    getChief().then(response => {
      this.setState({ chief: response.data[0] });
    })
  }

  render() {
    return (
      <div className="column center">
        <ToastContainer className="toast-container" />
        <Node {...this.state.chief} />
      </div>
    );
  }
};

export default App;
