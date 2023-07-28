import {useState,useRef} from "react";
import {Container,Row,Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from "@emailjs/browser";

export const Contacts=()=>{
    const form=useRef();
    const [data,setData]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData(true);
        emailjs.sendForm('service_toztshj', 'template_ub6uc6e', form.current, '6yS8PDzeeJQXIGxPy')
        .then((result) => {
            alert("Message sent Successfully")
            setData(false);
            e.target.reset();
        }, (error) => {
            alert("Please re-try, Something went wrong")
            setData(false);
            e.target.reset();
        });

    }
    return(

        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}><img src={contactImg} alt="contact" /></Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={handleSubmit} >
                            <Row>
                                <Col md={12} >
                                <input type="text"  name="user_name"  placeholder="your name ?"   />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                <input type="text"  name="user_email"  placeholder="your emial address"   />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} >
                                    <textarea row={6}  placeholder="message" name="message" />
                                </Col>
                            </Row>
                            <Row>
                                <button type="submit">
                                    <span>Submit</span>
                                </button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}



export default Contacts;