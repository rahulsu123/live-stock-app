import React, {Component} from 'react';
import './App.css';
import Dashboard from './Dashboard.jsx'

class App extends Component{
	
	state = {
		hasError: false
	}
	
	componentDidCatch(error, info) {
	this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return "Error Occured.";
    }
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
