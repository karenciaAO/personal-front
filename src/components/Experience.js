import { Container,Col,Tab, Row, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.svg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.svg";
import infomationImg from "../assets/img/informationImg.png"



export const Experience = () => {

    const  experience = [

        {
            title:"Quantitative Analyst, Credicorp Capital, (Financial services company).",
            description: "Participation in the Asset Allocation and Strategy Committees, for local and international assets.Support in the generation and automation of customer reports.",
            imgUrl: projImg1,
        },
        {
            title:"Quantitative Analyst, Ultraserfinco S.A Comisionistas de Bolsa, (Brokerage Firm).",
            description: "Mathematical modeling of portfolios, under the modern theory. Design of measurement and control methodologies for fixed income portfolio management. Design of forecasting and automation tools for equity portfolios.",
            imgUrl: projImg2,
        },
        {
            title:"Teaching Assistant - Linear Algebra, Universidad Nacional de Colombia, Medellín Campus.",
            description: "In charge of supporting the teaching activities in the School of Mathematics, for the Linear Algebra",
            imgUrl: projImg3,
        },
        {
            title:"Teaching Assistant - Laboratory of Physics of Oscillations, Waves and Optics, Universidad Nacional de Colombia, Medellín Campus.",
            description: "In charge of the correct organization of the laboratory material for carrying out the complementary practices to the Physics of Oscillations, Waves and Optics course, together with the preparation of the topics to be explained and discussed with the students, and the disposition to help them with their questions.",
            imgUrl: projImg3,
        },
    ];       



    return(
        <section className="experience" id="experience">
            <Container>
                <row>
                <Col size={12}>                  
                        
                        <img src={infomationImg} alt="Information Img"></img>
                        <Tab.Container id="experience-tabs" defaultActiveKey="first">
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
                        <Tab.Content id="slideInUp" >
                            <Tab.Pane eventKey="first">
                            <p>2014-2020 Bachelor Degree in Mathematics, Universidad Nacional de Colombia, Medellín Campus.</p>
                            <p>2012-2018 Bachelor Degree in Engineering Physics, Universidad Nacional de Colombia, Medellín Campus.</p>
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
                            
                            <ul>
                                <li>
                                    <p>2020 : Neural Networks and Deep Learning, Online course offered by deeplearning.ai in the Coursera platform. </p>
                                </li>
                                <li>
                                    <p>2020 Mathematics for Machine Learning Specialization, Online specialization program offered by Imperial College London in the Coursera platform.</p>
                                </li>
                                <li>
                                    <p>2019 VIII Cycle of Special Courses, Fundación Universitaria Konrad Lorenz, Bogotá.</p>
                                </li>
                                <li>
                                    <p>Introduction to Computer Science and Programming Using Python, Online course offered by Massachusetts Institute of Technology in the edx platform.</p>
                                </li>

                            </ul>
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