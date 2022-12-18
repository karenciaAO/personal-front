import { Container,Col,Tab, Row, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/credicorp.png";
import projImg2 from "../assets/img/coursera-logo.png";
import projImg3 from "../assets/img/konrat-logo.png";
import projImg4 from "../assets/img/edx-logo.png";
import educationImg from "../assets/img/unal.png";
import infomationImg from "../assets/img/informationImg.png";
import React from 'react';



export const Experience = () => {
    
    const formalEducation =[
        {
            title:"Bachelor Degree in Mathematics",
            description: "Universidad Nacional de Colombia, Medellín Campus(2014-2020)",
            imgUrl: educationImg,
        },
        {
            title:"Bachelor Degree in Engineering Physics",
            description: "Universidad Nacional de Colombia, Medellín Campus(2012-2018)",
            imgUrl: educationImg,
        },

    ];

    const  experience = [

        {
            title:"Quantitative Analyst, Credicorp Capital",
            description: "Mathematical modeling of portfolios. Design of measurement and control methodologies for fixed income portfolio management. Design of forecasting and automation tools for equity portfolios. Participation in the Asset Allocation and Strategy Committees and generation and automation of customer reports.(2018-Present)",
            imgUrl: projImg1,
        },       
        {
            title:"Teaching Assistant - Linear Algebra",
            description: "In charge of supporting the teaching activities in the School of Mathematics, for the Linear Algebra.Universidad Nacional de Colombia, Medellín Campus.(2018)",
            imgUrl: educationImg,
        },
        {
            title:"Teaching Assistant - Laboratory of Physics",
            description: "In charge of the correct organization of the laboratory material for carrying out the complementary practices to the Physics of Oscillations, Waves and Optics course, together with the preparation of the topics to be explained and discussed with the students. Universidad Nacional de Colombia, Medellín Campus.(2015-2017)",
            imgUrl: educationImg,
        },
    ];      
    
    const complementaryCourses = [
        {
            title:"Neural Networks and Deep Learning",
            description: "Online course offered by deeplearning.ai ",
            imgUrl: projImg2,
        },
        {
            title:"Mathematics for Machine Learning Specialization",
            description: "Online specialization program offered Imperial College London. Linear Algebra,Multivariate Calculus and PCA.",
            imgUrl: projImg2,
        },
        {
            title:"Cycle of Special Courses",
            description: "Fundación Universitaria Konrad Lorenz, Bogotá. Machine Learning Fundamentals and Natural Language Processing for Decision Making in Organizations",
            imgUrl: projImg3,
        },
        {
            title:"Introduction to Computer Science and Programming Using Python,",
            description: "Online course offered by Massachusetts Institute of Technology in the edx platform.",
            imgUrl: projImg4,
        },

    ];
    



    return(
        <section className="project" id="information">
            <Container>
                <row>
                <Col size={12}>                  
                        
                        <img src={infomationImg} alt="Information Img"></img>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            
                            <Nav.Item>
                            <Nav.Link eventKey="first">Formal Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Complementary Courses</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className="imagen">
                            <Tab.Pane eventKey="first" >
                            <Row>
                                {
                                formalEducation.map((formalEducation, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...formalEducation}
                                        />
                                    )
                                })
                                }
                            </Row>                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                {
                                experience.map((experience, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...experience}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                complementaryCourses.map((complementaryCourses, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...complementaryCourses}
                                        />
                                    )
                                })
                                }
                            </Row>                          
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>

                </Col>
                </row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>


        </section>


    )
}