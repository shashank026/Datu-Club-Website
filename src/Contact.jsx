import React, { useState } from 'react';
import y from "../src/images/fb.png";
import z from "../src/images/insta.png";
import a from "../src/images/linkdin.png";

const Contact = () => {

    const [data, setData] = useState({
        name: " ",
        email: " ",
        message: " ",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        // e.preventDefault();
        alert(`My name is ${data.name}. My Email Id is ${data.email}. My Message to you is ${data.message}`)
    };
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h1 className="follow">
                                Contact Us
                         </h1>

                            {/* ///////////////  Contact Form ////////////////// */}


                            <form className="form" onSubmit={formSubmit}>

                                <label className="name">Name</label>
                                <input name="name" value={data.name} onChange={InputEvent} placeholder="name" />

                                <label className="email">Email</label>
                                <input name="email" value={data.email} onChange={InputEvent} placeholder="email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

                                <label className="message">Message</label>
                                <textarea name="message" value={data.message} onChange={InputEvent} placeholder="message"></textarea>


                                <div className="bttn">
                                    <button className="btn btn-dark" type="submit">
                                        Submit
                            </button>
                                </div>
                            </form>



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
        </>);
};

export default Contact;