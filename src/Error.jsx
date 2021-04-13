import React from "react";
import { NavLink } from 'react-router-dom';
import y from "../src/images/fb.png";
import z from "../src/images/insta.png";
import a from "../src/images/linkdin.png";

const Error = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="last">
                                <div className="error">
                                    <h1>404 Error Page</h1>
                                    <p>Sorry! The page you are looking is doesn't exists</p>
                                </div>
                                <div className="my-1 continue">
                                    <NavLink to="/" className="btn btn-dark" role="button">
                                        Continue
                </NavLink>
                                </div>
                            </div>


                            {/* ////////////////////////////    Footer content     ////////////////////////////*/}

                            <div className="follow pt-5 ">
                                <h3>
                                    Follow Us
                                </h3>
                            </div>

                            <div className="social d-flex justify-content-center" >
                                <a href="https://www.facebook.com/datumdatascienceclub/">
                                    <img src={y} className="fb" alt="social img" />
                                </a>
                                <a href="https://www.instagram.com/datum_club_glau/">
                                    <img src={z} className="insta" alt="social img" />
                                </a>
                                <a href="https://www.linkedin.com/company/datumgla/mycompany/">
                                    <img src={a} className="in" alt="social img" />
                                </a>
                            </div>

                            <div className="credit d-flex justify-content-center">
                                <p>@Datum Club GLAU Created by Shashank</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Error;