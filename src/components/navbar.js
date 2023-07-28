import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";

//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/img/logo.png";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon2 from "../assets/img/github.svg";
//import navicon3 from "../assets/img/nav-icon3.svg"


function NavBar() {
    const [link,setLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',onScroll);
        return ()=> window.removeEventListener('scroll',onScroll);
    },[])

    const contact=()=>{
        console.log('contact ');
    }
    const onUpdateActiveLink=(value)=>{
        setLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"   >
                    <img src={logo} alt="logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon" ></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={link === "home" ? 'active navbar-link' : "navbar-link" } onClick={()=>onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skill" className={link === "skill" ? 'active navbar-link' : "navbar-link"} onClick={()=>onUpdateActiveLink('skill')}  >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={link === "projects" ? 'active navbar-link' : "navbar-link" } onClick={()=>onUpdateActiveLink('projects')} >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text" >
                        <div className="social-icon" >
                            <a href="https://www.linkedin.com/in/richards-dande-b13851206/" target="_blank" > 
                                <img src={navicon1} alt="linked in" />
                            </a>
                            <a href="https://github.com/Richards-Richie" target="_blank" > 
                                <img src={navicon2} alt="" />
                            </a>
                        </div>
                        <a href="#contact">
                            <button className="contact" onClick={contact} >contact</button>
                        </a>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;