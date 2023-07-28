import {Container,Row,Col} from 'react-bootstrap';
import java from "../assets/img/java.png"
import node from "../assets/img/nodejs.png"
import react from "../assets/img/react.png"
import mongodb from "../assets/img/mongodb.png"
import Carousel from "react-multi-carousel";
import python from "../assets/img/python.png"
import github from "../assets/img/github.png"
import "react-multi-carousel/lib/styles.css";


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
      <section className="skill" id="skill" >
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>
                  Skills
                </h2>
                <p>I've constanty upgrading my skills to face the rapidly evolving industry with the better skills,I could get</p>
                <Carousel className='skill-slider' responsive={responsive} infinite={true} >
                  <div className='item' >
                    <img src={java} alt="java" />
                    <h5>Java</h5>
                  </div>
                  <div className='item' >
                    <img src={node} alt="skill1" />
                    <h5>Node.js </h5>
                  </div>
                  <div className='item' >
                    <img src={react} alt="skill1" />
                    <h5>React.js</h5>
                  </div>
                  <div className='item' >
                    <img src={mongodb} alt="skill1" />
                    <h5>MongoDB</h5>
                  </div>
                  <div className='item' >
                    <img src={python} alt="skill1" />
                    <h5>Python</h5>
                  </div>
                  <div className='item' >
                    <img src={github} alt="skill1" />
                    <h5>Github</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        
    )
}

export default Skills;