"use client";
import React from "react";
import Link from "next/link";
import "../styles/fonts.module.css";
import styles from "@/styles/ourTeamStyles.css";
import { SiGmail } from "react-icons/si";
import { RiGithubLine } from "react-icons/ri";
import { Linkedin } from 'lucide-react';

const OurTeamAboutUs = () => {
  return (
    <>
      <div className="OurTeam">
        <p className="primary-subheading" style={{ fontFamily: "kufi" }}>Our team</p>
        <h4 className="team-primary-heading" style={{ fontFamily: "kufi", color: "", fontWeight: "bold", marginBottom: "6rem" }}>
          Meet the innovative <span className="" style={{ fontFamily: "angrybird", color: "#fe9e0d" }}>minds</span> behind our platform
        </h4>
        <div className="DevCardsPosition">
          <div className="Devcard">
            <center>
              <div className="profileimage">
                <img src="/images/aboutUs/ahsan.gif" alt="" />
              </div>
              <div className="Name">
                <p className="fs-1" style={{ fontFamily: "Kufi" }} >Ahsan Hafeez</p>
                <p style={{ fontFamily: "kufi", fontSize: "22px", letterSpacing: "1px", color: "" }}>Front-end Developer</p>
              </div>
              <div className="socialbar">
                <div>
                  <a id="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=ahsanhafeez506@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                    <SiGmail size={25} />
                  </a>
                </div>
                <div>
                  <Link id="github" href="https://github.com/Spiatron" passHref target="_blank" rel="noopener noreferrer">
                    <RiGithubLine size={25} />
                  </Link>
                </div>
                <div>
                  <Link id="Linkedin" href="https://www.linkedin.com/in/ahsan-hafeez-116943278/" passHref target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </center>
          </div>

          <div className="Devcard">
            <center>
              <div className="profileimage">
                <img src="/images/aboutUs/shady2.gif" alt="" />
              </div>
              <div className="Name">
                <p className="fs-1" style={{ fontFamily: "Kufi" }}>Shehryar Khatri </p>
                <p style={{ fontFamily: "kufi" }}>DevOps</p>
              </div>
              <div className="socialbar">
                <div>
                  <Link id="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=shehryarhussainkhatri@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                    <SiGmail size={25} />
                  </Link>
                </div>
                <div>
                  <Link id="github" href="https://github.com/ShehryarHussainKhatri" passHref target="_blank" rel="noopener noreferrer">
                    <RiGithubLine size={25} />
                  </Link>
                </div>
                <div>
                  <Link id="Linkedin" href="https://www.linkedin.com/in/shehryarhussainkhatri/" passHref target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </center>
          </div>

          <div className="Devcard">
            <center>
              <div className="profileimage">
                <img src="/images/aboutUs/shadow.gif" alt="" />
              </div>
              <div className="Name">
                <p className="fs-1" style={{ fontFamily: "Kufi" }}>Muhammad Ali</p>
                <p style={{ fontFamily: "kufi" }}>Back-end Developer</p>
              </div>
              <div className="socialbar">
                <div>
                  <Link id="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammad.ali.26500@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                    <SiGmail size={22} />
                  </Link>
                </div>
                <div>
                  <Link id="github" href="https://github.com/Muhammad-Alii2" passHref target="_blank" rel="noopener noreferrer">
                    <RiGithubLine size={25} />
                  </Link>
                </div>
                <div>
                  <Link id="Linkedin" href="https://www.linkedin.com/in/mohammadali26/" passHref target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </center>
          </div>

          <div className="Devcard">
            <center>
              <div className="profileimage">
                <img src="/images/aboutUs/ahsanMemon.gif" alt="" />
              </div>
              <div className="Name">
                <p className="fs-1" style={{ fontFamily: "Kufi" }}>Ahsan Memon</p>
                <p style={{ fontFamily: "kufi" }}>Marketing</p>
              </div>
              <div className="socialbar">
                <div>
                  <Link id="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahsanalimemon480@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                    <SiGmail size={22} />
                  </Link>
                </div>
                <div>
                  <Link id="Linkedin" href="https://www.linkedin.com/in/ahsan-ali-memon-77b268258/" passHref target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </center>
          </div>

          <div className="Devcard">
            <center>
              <div className="profileimage">
                <img src="/images/aboutUs/faizan.gif" alt="" />
              </div>
              <div className="Name">
                <p className="fs-1" style={{ fontFamily: "Kufi" }}>Faizan Sheikh</p>
                <p style={{ fontFamily: "kufi" }}>Brand Advisor</p>
              </div>
              <div className="socialbar">
              <div>
                  <Link id="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikhfaizan2001@gmail.com" passHref target="_blank" rel="noopener noreferrer">
                    <SiGmail size={22} />
                  </Link>
                </div>
                <div>
                  <Link id="Linkedin" href="https://www.linkedin.com/in/faizan-e-mustafa-7a5620167/" passHref target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </center>
          </div>

        </div>
      </div>
    </>
  );
};
export default OurTeamAboutUs;
