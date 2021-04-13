import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/05.png";
import img from "../src/images/ML.png";
import python from "../src/images/py.png";
import c from "../src/images/c2.jpg";
import x from "../src/images/08.png";
import y from "../src/images/fb.png";
import z from "../src/images/insta.png";
import a from "../src/images/linkdin.png";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Welcome to the <strong className="brand-name">Datum Club</strong> Official Website
                                    </h1>
                                    <h2 className="my-3">
                                        Datum is the official Data Science Club of <a href="https://www.gla.ac.in" className="gla-link">GLA University.</a>
                                </h2>
                                    <div className="mt-3">
                                        <NavLink to="/Events" className="btn btn-dark" role="button">
                                            Get Started
                                </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid-animation" alt="home img" />
                                </div>
                            </div>

                            {/* ////////////////////////////    Event content    ////////////////////////////*/}


                            <div className="top pt-5 ">
                                <h3>
                                    Top Events
                                </h3>
                                <div className="row pt-4 me">
                                    <div className="card" >
                                        <img src={img} className="card-img-top" alt="event img" />
                                        <div className="card-body">
                                            <h5 className="card-title">ML Workshop</h5>
                                            <p className="card-text">Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal....</p>
                                            <div className="my-1">
                                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                                    Read
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" >
                                        <img src={python} className="card-img-top" alt="event img" />
                                        <div className="card-body">
                                            <h5 className="card-title"> Python Quiz</h5>
                                            <p className="card-text">Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach....</p>
                                            <div className="my-1">
                                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                                    Read
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" >
                                        <img src={c} className="card-img-top" alt="event img" />
                                        <div className="card-body">
                                            <h5 className="card-title"> C Programmin Quiz</h5>
                                            <p className="card-text">C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical....</p>
                                            <div className="my-1">
                                                <NavLink to="/Events" className="btn btn-dark" role="button">
                                                    Read
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>



                                    {/* ////////////////////////////    About Us content ////////////////////////////*/}



                                    <div className="top pt-5 ">
                                        <h3>
                                            About Us
                                </h3>
                                        <div className="row mr">
                                            <div className="col-lg-6 order-2 order-lg-1 header-img">
                                                <img src={x} className="img-fluid-animation" alt="home img" />
                                            </div>
                                            <div className="col-md-6 pt-3 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                                <h1 className="my-0">
                                                    "Datum is the official club of GLA University. which deals with Data Science projects. Datum has a very good team who can organize a Workshop or Events on various topic."
                                    </h1>
                                            </div>
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
                    </div>
                </div>
            </section>
        </>);
};

export default Home;