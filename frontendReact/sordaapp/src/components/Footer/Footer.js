import  React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                {/*<form action="/action_page.php"> */}
                    <button className="footer-button" type="submit" value="Save">Save</button>
                    <button className="footer-button" type="submit" value="Shuffle">Shuffle</button>
                {/*</form>*/}
            </footer>
        )
    }
}

export default Footer;