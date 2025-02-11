import React from 'react'
import { NavLink } from 'react-router-dom'
import SelectCaterory from './SelectCaterory'
import { useSelector } from 'react-redux'

function NavBar() {
    const arrayCart=useSelector((state)=>{
        return state.Cart.arrCart;
    })
    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <SelectCaterory/>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <a href="/" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">
                                    Multi
                                </span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                    Shop
                                </span>
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link active">
                                        Home
                                    </NavLink>
                                    <NavLink to="/Shop" className="nav-item nav-link">
                                        Shop
                                    </NavLink>
                                    <NavLink to="/Detail" className="nav-item nav-link">
                                        Shop Detail
                                    </NavLink>
                                    <div className="nav-item dropdown">
                                        <a
                                            href="/"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages <i className="fa fa-angle-down mt-1" />
                                        </a>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <NavLink to="/Cart" className="dropdown-item">
                                                Shopping Cart
                                            </NavLink>
                                            <NavLink to="/Checkout" className="dropdown-item">
                                                Checkout
                                            </NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/Contactus" className="nav-item nav-link">
                                        Contact
                                    </NavLink>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <a href="/" className="btn px-0">
                                        <i className="fas fa-heart text-primary" />
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: 2 }}
                                        >
                                            0
                                        </span>
                                    </a>
                                    <NavLink to="/Cart" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary" />
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: 2 }}
                                        >
                                           {arrayCart.length}
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar