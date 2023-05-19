
import Searchbar from "./Searchbar/Searchbar";
import { Component } from "react";

 class App extends Component  {

  state = {
    name: '',
   }
   
   handleSubmit = (name) => {
     this.setState({
       name,
     })
   }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    
    )
  }
};

export default App;