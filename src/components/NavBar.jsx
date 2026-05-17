import {NavLink, Link} from "react-router"

export default function NavBar() {

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            <NavLink className="nav-link" to="/adminPortal">Admin Portal</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}