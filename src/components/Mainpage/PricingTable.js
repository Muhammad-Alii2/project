"use client";
import React from "react";
import Link from "next/link";
import "../../styles/fonts.module.css"
import { FaCheck, FaBook, FaClipboardList, FaGraduationCap, FaCoins } from 'react-icons/fa';
import styles from "@/styles/ourTeamStyles.css";

const PricingTable = () => {
    return (
        <>
            <div className="OurTeam">
                <p className="primary-subheading" style={{ fontFamily: "kufi" }}>Pricing Table</p>
                <h4 className="team-primary-heading" style={{ fontFamily: "kufi", color: "", fontWeight: "bold", marginBottom: "6rem" }}>
                    Unlock your <span className="" style={{ fontFamily: "angrybird", color: "#fe9e0d" }}>learning potential</span> with the perfect plan!
                </h4>

                <div className="container text-light mb-5" style={{fontFamily:"kufi"}}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <table className="table text-center" style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
                                <thead>
                                    <tr style={{ fontSize: '1.5rem', backgroundColor: '#2b2b2b' }}>
                                        <th style={{ fontSize: '2rem', color: '#fe9e0d', fontWeight: 'bold', padding: '30px' }}>
                                        <FaCoins className="me-2 mb-2" size={40} /> PLANS</th>
                                        <th style={{ color: 'white', padding: '15px' }}>
                                            <FaBook className="me-2 mb-2" size={40} /> Single PACK <br />
                                            <span style={{ fontSize: '1.2rem' }}>200 RS for 1 course ( 5 Credits )</span>
                                        </th>
                                        <th style={{ color: 'white', padding: '15px' }}>
                                            <FaClipboardList className="me-2 mb-2" size={40} /> Starter PACK <br />
                                            <span style={{ fontSize: '1.2rem' }}>350 RS for 3 courses ( 15 Credits )</span>
                                        </th>
                                        <th style={{ color: 'white', padding: '15px' }}>
                                            <FaGraduationCap className="me-2 mb-2" size={40} /> STUDENT PACK <br />
                                            <span style={{ fontSize: '1.2rem' }}>500 RS for 5 courses ( 25 Credits )</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: '#1c1c1c' }}>
                                    {[
                                        'Course Generation',
                                        'Quiz Generation',
                                        'User Progress',
                                        'Progress Result',
                                        'ChatBot',
                                        'User Specified Gallery',
                                        'Credits Introduction',
                                        'Credit History',
                                    ].map((feature, index) => (
                                        <tr key={index}>
                                            <td style={{ padding: '10px', color: 'white', fontSize: '1.2rem', border:"none" }}>{feature}</td>
                                            <td style={{ padding: '10px', border:"none" }}>{index < 8 ? <FaCheck color="green" /> : null}</td>
                                            <td style={{ padding: '10px', border:"none" }}>{index < 8 ? <FaCheck color="green" /> : null}</td>
                                            <td style={{ padding: '10px', border:"none" }}>{index < 8 ? <FaCheck color="green" /> : null}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default PricingTable;
