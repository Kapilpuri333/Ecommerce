import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav id="nav" class="navbar navbar-expand-lg ">
                <a id="pk" class="navbar-brand mb-2 py" href="#">KP STORE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="nav_item" class="navbar-nav justify-content-center " >
                        <a class="nav-item nav-link active me-2 " href="/">Home</a>
                        <a class="nav-item nav-link" href="/products">Products</a>
                        <a class="nav-item nav-link" href="/about">About</a>
                        <a class="nav-item nav-link disabled" href="#">Contact</a>

                        {/* <a class="nav-item nav-link" href="/Search">Search</a> */}

                        <form id="search" class="d-flex"style={{margin:"0px"}}>
                            <input class="form-control me-2" type="search" placeholder="Search" style={{marginLeft:"160px"}} aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="buttons ">
                        <NavLink to="/login" className="btn btn-outline-dark "style={{marginLeft:"100px"}}>
                            <a className="fa fa-sign-in me-1 " href="/login"></a> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark ms-2">
                            <a className="fa fa-user-plus me-1"href="/register"></a> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                            <a className="fa fa-shopping-cart me-1"href="/cart"></a> Cart (0)</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-dark ms-2">
                            <a className="fa fa-shopping-cart me-1"href="/contact"></a> Contact (0)</NavLink>
                       </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar



