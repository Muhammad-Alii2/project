import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import style from "@/styles/buttons/C_buttons.css";

const ContactForm = () => {
    return (
        <div
            className="container p-5"
            style={{
                backgroundColor: "#0d1117",  // Dark background
                borderRadius: "18px",  // Slightly rounded corners
                color: "#ffffff",  // White text for contrast
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",  // Subtle shadow for depth
                maxWidth: "1200px",  // Max width for the entire container
                maxHeight: "100vh",  // Max height for the form
                fontFamily: "kufi",
                overflowY: "auto",  // Vertical scrolling if necessary
            }}
        >
            <div className="row">
                {/* Left column with logos and contact info */}
                <div className="col-md-5 d-flex flex-column justify-content-center me-5" style={{ background: "#212529", padding: "30px", borderRadius: "12px", width: "400px" }}>
                    <h4 className="" style={{ fontSize: "28px" }}>Get in touch with Ins<span className="" style={{ fontFamily: "Android101", color: "#f09042" }}>AI</span>ghtful</h4>
                    <p className="mb-4 text-muted" style={{ fontFamily: "kufi" }}>Feel free to drop a line below!</p>

                    {/* Contact Info with Logos */}
                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="gmail C_logo" href="https://mail.google.com/mail/?view=cm&fs=1&to=insightful1@gmail.com" target="_blank" rel="noopener noreferrer">
                                <SiGmail size={30} />
                            </Link>
                        </div>
                        <Link className="gmail C_logo text-decoration-none" href="https://mail.google.com/mail/?view=cm&fs=1&to=insightful1@gmail.com" target="_blank" rel="noopener noreferrer">  
                        <span className="ms-3" style={{fontSize:"20px"}}>insightful1@gmail.com</span></Link>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="Linkedin C_logo" href="https://www.linkedin.com/company/insaightful/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </Link>
                        </div>
                        <Link className="Linkedin C_logo text-decoration-none" href="https://www.linkedin.com/company/insaightful/" target="_blank" rel="noopener noreferrer">
                        <span className="ms-3" style={{fontSize:"20px"}}>Linkedin/InsAIghtful</span></Link>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="facebook C_logo" href="https://www.facebook.com/people/insaightful/61563303039848/" target="_blank" rel="noopener noreferrer">
                                <FaSquareFacebook size={30} />
                            </Link>
                        </div>
                        <Link className="facebook C_logo  text-decoration-none" href="https://www.facebook.com/people/insaightful/61563303039848/" target="_blank" rel="noopener noreferrer">
                        <span className="ms-3" style={{fontSize:"20px"}}>Facebook/InsAIghtful</span></Link>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="instagram C_logo" href="https://www.instagram.com/insaightful/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </Link>
                        </div>
                        <Link className="instagram C_logo  text-decoration-none" href="https://www.instagram.com/insaightful/" target="_blank" rel="noopener noreferrer">
                        <span className="ms-3" style={{fontSize:"20px"}}>Instagram/InsAIghtful</span></Link>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="youtube C_logo" href="https://www.youtube.com/@InsAIghtful-AI" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={30} />
                            </Link>
                        </div>
                        <Link className="youtube C_logo  text-decoration-none" href="https://www.youtube.com/@InsAIghtful-AI" target="_blank" rel="noopener noreferrer">
                        <span className="ms-3" style={{fontSize:"20px"}}>Youtube/InsAIghtful-AI</span> </Link>
                    </div>
                    
                    <div className="d-flex align-items-center mb-3">
                        <div className="contact-logo" style={logoStyle}>
                            <Link className="whatsapp C_logo" href="https://wa.me/+923708493293" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={30} />
                            </Link>
                        </div>
                        <Link className="whatsapp C_logo  text-decoration-none" href="https://wa.me/+923708493293" target="_blank" rel="noopener noreferrer">
                        <span className="ms-3" style={{fontSize:"20px"}}>Whatsapp/InsAIghtful</span></Link>
                    </div>
                </div>

                {/* Right column with the form */}
                <div className="col-md-7">
                    <form style={{ fontFamily: "kufi" }}>
                        <div className="row">
                            <div className="col-md-6 mb-3" >
                                <label htmlFor="firstName" className="form-label" style={{ fontSize: "24px" }}>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="John"
                                    style={inputStyle}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label" style={{ fontSize: "24px" }}>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Doe"
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontSize: "24px" }}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                style={inputStyle}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" style={{ fontSize: "24px" }}>What can we help you with?</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="8"
                                placeholder="Type your message here. We would love to hear from you!"
                                style={inputStyle}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="CCP_Order w-100"
                            style={{ letterSpacing: "2px", fontSize: "26px" }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Styles for the logos
const logoStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#2c2c2e",  // Placeholder dark background for the logo
    color: "#fff",  // Logo placeholder text color
    borderRadius: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

// Styles for the form inputs
const inputStyle = {
    backgroundColor: "#212529",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "10px"
};

export default ContactForm;
