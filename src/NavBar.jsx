import React from "react";

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-sm">
            <div class='container-fluid'>
                <h1>LoginForm</h1>
                <div class='collapse navbar-collapse'>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class='nav-item'>
                            <a className="nav-link active" aria-current='page' href='#'>Home</a>
                        </li>
                        <li class='nav-item'>
                            <a className="nav-link active" aria-current='page' href='#'>sign up</a>
                        </li>
                        <li class='nav-item'>
                            <a className="nav-link active" aria-current='page' href='#'>contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;