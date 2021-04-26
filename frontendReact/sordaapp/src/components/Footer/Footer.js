import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                <Link to="/results">
                    <FooterButton 
                        value={this.props.value}
                        text={this.props.text}
                        onClick={this.props.onClick} />
                </Link>
            </footer>
        )
    }
}

export default Footer;