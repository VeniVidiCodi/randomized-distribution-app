import  React, { Component } from 'react';
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                    <FooterButton value="Save" text="Save" />
                    {/* <FooterButton value="Shuffle" text="Shuffle" /> */}
            </footer>
        )
    }
}

export default Footer;