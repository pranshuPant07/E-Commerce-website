import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignUp from './PopUps/SignUp';


function Footer() {
    const [ShowModal, setShowModal] = useState(false);
    const [Email, setEmail] = useState('');
    function clicked_SignUpbutton(e) {
        if (Email.length <= 0) {
            alert('Please Enter Your Email')
        }
        else {
            setShowModal(true)
        }
        e.preventDefault();
    }
    function valueReader(e) {
        setEmail(e.target.value);
    }

    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
                        <p className="mb-4">
                            SINGLE STOP FOR YOUR EVERY NEED
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-primary mr-3" />
                            921, Floor 9, Vegas Mall, Dwarka, New Delhi, INDIA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3" />
                            contactUs@MultiShop.com
                        </p>
                        <p className="mb-0">
                            <i className="fa fa-phone-alt text-primary mr-3" />
                            +91 70070 00700
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <NavLink to="/" className="text-secondary mb-2">
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </NavLink>
                                    <NavLink to="/Detail" className="text-secondary mb-2" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </NavLink>
                                    <NavLink to="/Cart" className="text-secondary mb-2" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </NavLink>
                                    <NavLink to="/Checkout" className="text-secondary mb-2">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </NavLink>
                                    <NavLink to="/Contactus" className="text-secondary" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <NavLink to="/" className="text-secondary mb-2" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </NavLink>
                                    <NavLink to="/Detail" className="text-secondary mb-2" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </NavLink>
                                    <NavLink to="/Cart" className="text-secondary mb-2" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </NavLink>
                                    <NavLink to="/Checkout" className="text-secondary mb-2">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </NavLink>
                                    <NavLink to="/Contactus" className="text-secondary" >
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                                <form action="">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            required="required"
                                            data-validation-required-message="Please enter your email"
                                            onChange={valueReader}
                                        />
                                        <div>
                                            <button onClick={clicked_SignUpbutton} className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                                    Follow Us
                                </h6>
                                <div className="d-flex">
                                    <a className="btn btn-primary btn-square mr-2" href="https://twitter.com/PranshuPant3" target='blank'>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-primary btn-square mr-2" href="https://facebook.com/pranshu.pant.92" target='blank'>
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-primary btn-square mr-2" href="https://www.linkedin.com/" target='blank'>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="btn btn-primary btn-square" href="https://instagram.com/pranshupant/" target='blank'>
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row border-top mx-xl-5 py-4"
                    style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
                >
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-secondary">
                            ©{" "}
                            <a className="text-primary" href="#">
                                Domain
                            </a>
                            . All Rights Reserved. Designed by Pranshu Pant
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="./static/img/payments.png" alt="" />
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {ShowModal && <SignUp Email={Email} onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default Footer