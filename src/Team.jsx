import React from 'react';
import profile from "../src/images/profile.png";
import y from "../src/images/fb.png";
import z from "../src/images/insta.png";
import a from "../src/images/linkdin.png";

const Team = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h1 className="follow">
                                Our Team
                         </h1>

                            {/* </div> */}




                            {/* ////////////////// Team Card ////////////////// */}



                            <div className="row pt-4 me">
                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Faculty Mentor</p>
                                        <p className="card-text">Name: Ashutosh Shankdhar</p>
                                        <p ClassName="cno">Contact No.: 9986679023</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>

                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: President</p>
                                        <p className="card-text">Name: Suyash Batham</p>
                                        <p ClassName="cno">Contact No.: 9336203569</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>

                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Vice-President</p>
                                        <p className="card-text">Name: Utkarsh Saxena</p>
                                        <p ClassName="cno">Contact No.: 9119059404</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>

                                {/* //////////////// Design Team /////////////////// */}

                                <div className="ev ">
                                    <h3>
                                        Design Team
                                                    </h3>
                                </div>

                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Design Team Member</p>
                                        <p className="card-text">Name: Saksham Sabhani</p>
                                        <p ClassName="cno">Contact No.: 8864886477</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>

                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Design Team Member</p>
                                        <p className="card-text">Name: Sanskar Gupta</p>
                                        <p ClassName="cno">Contact No.: 7055587980</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>


                                {/* ///////////////////// Technical Team ////////////////// */}

                                <div className="ev ">
                                    <h3>
                                        Technical Team
                                                    </h3>
                                </div>


                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Technical Team Member</p>
                                        <p className="card-text">Name: Shashank Saraswat</p>
                                        <p ClassName="cno">Contact No.: 7017753527</p>
                                        <p>Mail id: -- </p>
                                    </div>

                                </div>

                                <div className="card" >
                                    <img src={profile} className="card-img-top" alt="event img" />
                                    <div className="card-body">
                                        <p>Role: Technical Team Member</p>
                                        <p className="card-text">Name: Kushagra Saxena</p>
                                        <p ClassName="cno">Contact No.: 6386522642</p>
                                        <p>Mail id: -- </p>
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
            </section>
        </>);
};

export default Team;