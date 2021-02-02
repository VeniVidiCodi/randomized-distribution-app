import  React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                {/*<form action="/action_page.php"> */}
                    <button class="footer-button" type="submit" value="Save">Save</button>
                    <button class="footer-button" type="submit" value="Shuffle">Shuffle</button>
                {/*</form>*/}
            </footer>
        )
    }
}

export default Footer;