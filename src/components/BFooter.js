import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";

const BFooter = () => {
  return (
    <footer
      className="d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "#0d1117",
        color: "#fff",
        padding: "20px 40px",
        fontFamily: "kufi",  // Font styling for hand-drawn effect
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Left side: Logo */}
       <Link
            className="fs-1 lh-1 navbar-brand text-light me-auto"
            href="/"
            style={{ fontFamily: "kufi"}}
          >
            {" "}
            <div>
            Ins<span className="" style={{fontFamily:"Android101", color:"#f09042"}}>AI</span>ghtful
            </div>
          </Link>

      {/* Middle: Social Links */}
      <ul className="nav list-unstyled d-flex justify-content-center mb-0" style={{ gap: "20px" }}>
        <li>
          <Link href="https://www.linkedin.com/company/insaightful/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
        <li>
          <Link  href="https://www.facebook.com/people/insaightful/61563303039848/" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@InsAIghtful-AI" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/insaightful/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/insaightful/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
        <li>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=insightful1@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={25} style={{ color: "#fff" }} />
          </Link>
        </li>
      </ul>

      {/* Right side: Footer info */}
      <div className="ms-auto" style={{ fontSize: "20px", letterSpacing:"1px" }}>
      <FaRegCopyright className="mb-1" /> 2024 InsAIghtful, Inc
      </div>
    </footer>
  );
};

export default BFooter;
