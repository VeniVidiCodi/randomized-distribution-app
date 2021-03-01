import  React, { Component } from 'react';
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                    <FooterButton 
                        value={this.props.value}
                        text={this.props.text}
                        onClick={this.props.onClick} />
            </footer>
        )
    }
}

export default Footer;