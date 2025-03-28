import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolio.png";
import projImg2 from "../assets/img/tapconnect.png";
import projImg3 from "../assets/img/MemoGram.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects=()=>{
    const projects=[
            {
                title: "Portflio",
                description: "Design & Development",
                imgUrl: projImg1,
            },
            {
                title: "TapConnect ",
                description: "an app that takes contact sharing to a new level of convenience",
                imgUrl: projImg2,
            },
            {
                title: "",
                description: "Design & Development",
                imgUrl: projImg3,
            },
        ];
    return(
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            
                            <TrackVisibility>
                                {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                            projects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                            }
                                        </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>These projects offer practical hands-on experience and numerous benefits that contribute to the overall learning process and professional development of students</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <p>Portfolio helped me to get a good experience on using different front end technologies</p>
                                        <p>TapConnect and MemoGram helped me to get experience with complete Fullstack development both web and mobile development</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Tab.Container>
                                </div>}
                                </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2} />
            </section>
    )
}
export default Projects;