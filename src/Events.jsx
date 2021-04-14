import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../src/images/ML.png";
import python from "../src/images/python1.png";
import c from "../src/images/c1.png";
import y from "../src/images/fb.png";
import z from "../src/images/insta.png";
import a from "../src/images/linkdin.png";


const Events = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h1 className="follow">
                                Events
                         </h1>
                            <h1 className="events-head">
                                Datum Club organize a 2 - 3 events every month. The events are both on offline (in-Person) Workshop or in Online Webinar depending on the situation. main motive of such events is to spread some Techional kowledge to the students who are very curious about there career.
                          </h1>


                            {/* ////////////////////////////    Event content    ////////////////////////////*/}




                            {/* <div className="top pt-5 ">
                                <h3>
                                    Top Events
                                </h3> */}
                            <div className="row pt-4 ev">
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
                            </div>
                            {/* </div> */}




                            {/* ////////////////////////////    Footer content     ////////////////////////////*/}






                            <div className="follow pt-5 ">
                                <h3>
                                    Follow Us
                                </h3>
                            </div>

                            <div className="social d-flex justify-content-center" >
                                <a href="https://www.facebook.com/datumdatascienceclub/" >
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
        </>);
};

export default Events;