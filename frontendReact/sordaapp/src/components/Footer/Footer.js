import  React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer id="app-footer">
                {/*<form action="/action_page.php"> */}
                    <div className="footer-button" type="submit" value="Save" onClick={() => console.log("SAVE BUTTON CLICKED...")}>Save</div> 
                    
                    <div className="footer-button" type="submit" value="Shuffle" onClick={() =>
                    console.log("SHUFFLE BUTTON CLICKED...")}>Shuffle</div>
                {/*</form>*/}
            </footer>
        )
    }
}

export default Footer;