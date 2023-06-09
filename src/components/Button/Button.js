import { Component } from "react";
import css from './Button.module.css';
import PropTypes from 'prop-types'; 


export default class Button extends Component {


    render() {
        
        return (
            
            <button className={css.Button} type="button" onClick={this.props.onClick}>Load more</button>
        )
    }
}

Button.protoType = {
  onClick: PropTypes.func,
};

