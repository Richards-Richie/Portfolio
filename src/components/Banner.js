import {useState,useEffect} from "react";
import { Container,Row,Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import "animate.css"
import TrackVisibility from "react-on-screen";

const Banner=()=>{
    const [loopNumber,setLoopNumber]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const rotate=["Fullstack Web Developer","Java Developer","Flutter","Deep Learning"]
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=1000;



    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker);}
    },[text]);
    const tick=()=>{
        let i=loopNumber%rotate.length;
        let fultext=rotate[i];
        let updatedText=isDeleting ? fultext.substring(0,text.length-1):fultext.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fultext){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNumber+1);
            setDelta(500);

        }
    
    }



    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}  >
                                <span className="tagline">welcome to my PortFolio </span>
                                <h1>{`I'm
                                Richards `}
                                <br/><span className="wrap">{text}</span></h1>
                                <p>A dedicated and enthusiastic professional with a passion for technology and a strong work ethic, seeking opportunities to contribute my skills and expertise in a dynamic and innovative work environment.</p>
                                <a href="#contact">
                                    <button>Connect<ArrowRightCircle size={25}/> </button>
                                </a>
                            </div>
                        }
                            
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}
export default Banner;