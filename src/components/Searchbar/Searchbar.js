import { Component } from "react";
import css from './Searchbar.module.css'
  
  
class Searchbar extends Component {

  state = {
    name: '',
  };


  handleChange = (event) => {
    this.setState({
      name: event.currentTarget.value,
    })
  }
  reset = () => {
    this.setState({
      name: '',
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name)
    this.reset();
  }
    
  render() {
    return (
     <header className={css.Searchbar}>
  <form onSubmit={this.handleSubmit}>
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      onChange={this.handleChange}
            type="text"
            value={this.state.name}
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }
}


export default Searchbar;

