import React, { useState } from "react";
import './Home.css'
import photo from '../assets/Screenshot 2025-07-04 113730.png'
import call from '../assets/phone-call.png'
import mail from '../assets/email.png'
import web from '../assets/website.png'
import home from '../assets/home.png'
import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation()

    const data = location.state

    console.log(data);
    

    return (
        <>
            <div className="div">
                <div className="main-container">

                    {/* Profile */}

                    <div className="head">
                        <div className="image">
                            <img src={data.image}/>
                        </div>
                        <div className="name">
                            <h1>{data.name}</h1>
                            <h3>{data.designation}</h3>
                            <div className="connect">
                                <img src={call} />
                                <h5>{data.mobile}</h5>
                            </div>
                            <div className="connect">
                                <img src={mail} />
                                <h5>{data.email}</h5>
                            </div>
                            <div className="connect">
                                <img src={web} />
                                <h5>{data.website}</h5>
                            </div>
                            <div className="connect">
                                <img src={home} />
                                <h5>{data.location}</h5>
                            </div>
                        </div>
                    </div>

                    {/* Professional Summary */}

                    <div className="summary">
                        <div className="heads">
                            <h4>PROFESSIONAL SUMMARY</h4>
                        </div>
                        <div className="summary-contents">
                            <p>{data.bio}</p>
                        </div>
                    </div>

                    {/* Academic Background */}

                    <div className="academic">
                        <div className="heads">
                            <h4>ACADEMIC BACKGROUND</h4>
                        </div>
                        <div className="academic-content">
                            <div className="academic-content-left">
                                <div className="university">
                                    <div className="college">
                                        <p>{data.pgUniversity}</p>
                                    </div>
                                    <div className="year">
                                        <p>{data.year2}</p>
                                    </div>
                                </div>
                                <div className="course">
                                    <div className="dept">
                                        <p>{data.higher}</p>
                                    </div>
                                    <div className="mark">
                                        <p>{data.pgMark}</p>
                                    </div>
                                </div>
                                <div className="academic-inner-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum, exercitationem necessitatibus soluta neque</p>
                                </div>
                            </div>
                            <div className="academic-content-right">
                                <div className="university">
                                    <div className="college">
                                        <p>{data.ugUniversity}</p>
                                    </div>
                                    <div className="year">
                                        <p>{data.year}</p>
                                    </div>
                                </div>
                                <div className="course">
                                    <div className="dept">
                                        <p>{data.degree}</p>
                                    </div>
                                    <div className="mark">
                                        <p>{data.ugMark}</p>
                                    </div>
                                </div>
                                <div className="academic-inner-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum, exercitationem necessitatibus soluta neque</p>
                                </div>
                            </div>
                        </div>

                        {/* Career History */}

                    </div>
                    <div className="career">
                        <div className="heads">
                            <h4>CAREER HISTORY</h4>
                        </div>
                        <div className="academic-content">
                            <div className="academic-content-left">
                                <div className="university">
                                    <div className="college">
                                        <p>{data.secondRole}</p>
                                    </div>
                                    <div className="year">
                                        <p>{data.expYear2}</p>
                                    </div>
                                </div>
                                <div className="course">
                                    <div className="dept">
                                        <p>{data.secondCompany}</p>
                                    </div>
                                </div>
                                <div className="academic-inner-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum, exercitationem necessitatibus soluta neque</p>
                                </div>
                            </div>
                            <div className="academic-content-right">
                                <div className="university">
                                    <div className="college">
                                        <p>{data.firstRole}</p>
                                    </div>
                                    <div className="year">
                                        <p>{data.expYear1}</p>
                                    </div>
                                </div>
                                <div className="course">
                                    <div className="dept">
                                        <p>{data.firstCompany}</p>
                                    </div>
                                </div>
                                <div className="academic-inner-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum, exercitationem necessitatibus soluta neque</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Skills */}

                    <div className="skills">
                        <div className="heads">
                            <h4>SKILLS</h4>
                        </div>
                        <div className="skills-content">
                            <ul>
                                <li>{data.skill1}</li>
                                <li>{data.skill2}</li>
                                <li>{data.skill3}</li>
                                <li>{data.skill4}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Projects */}

                    <div className="project">
                        <div className="heads">
                            <h4>PROJECTS</h4>
                        </div>
                        <div className="project-content">
                            <ul>
                                <li>{data.project1}</li>
                                <p>{data.project1Des}</p>
                                <li>{data.project2}</li>
                                <p>{data.project2Des}</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home