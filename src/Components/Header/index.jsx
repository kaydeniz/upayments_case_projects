import {Link} from "react-router-dom";

function Header() {

    return (
        <div className="App-header">
            <Link to="/" className="Home-Link" >
                UPayments Store
            </Link>
            <p> Register</p>
        </div>
    );
}

export default Header;
