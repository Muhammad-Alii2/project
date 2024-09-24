"use client";
import React, { useState } from "react";
import { GoCopy } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { CgDanger } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/buttons/C_buttons.css";
import sidebarStyles from "@/styles/sidebar.css";

const CreditsCheckoutPage = ({ session }) => {
    const [credits, setCredits] = useState(2);
    const [confirmed, setConfirmed] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [copySuccess, setCopySuccess] = useState({
        receipt: false,
        iban: false,
        account: false,
    });
    const pricePerCredit = 50;
    const totalPrice = credits * pricePerCredit;

    const handleCreditChange = (increment) => {
        setCredits((prevCredits) => {
            const newCredits = prevCredits + increment;
            return newCredits < 1 ? 1 : newCredits;
        });
        setConfirmed(false);
    };

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const handleCopy = (text, type) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopySuccess((prevState) => ({
                    ...prevState,
                    [type]: true,
                }));
                setTimeout(
                    () =>
                        setCopySuccess((prevState) => ({
                            ...prevState,
                            [type]: false,
                        })),
                    2000
                );
            })
            .catch((err) => {
                console.error("Failed to copy the text: ", err);
            });
    };

    const handleCompleteOrder = () => {
        setOrderCompleted(true);
    };

    return (
        <div
            className="container-fluid d-flex justify-content-center align-items-center p-4"
            style={{ color: "#ffffff", fontFamily:"kufi" }}
        >
            <div className="d-flex w-100" style={{ maxWidth: "1300px" }}>
                {/* Checkout Section */}
                <div
                    className="card p-4 shadow mx-3 border-0"
                    style={{
                        width: "48%",
                        backgroundColor: "#0d1117",
                        borderRadius: "12px",
                        color: "#ffffff",
                    }}
                >
                    {/* <h2 className="text-center mb-4">Check-out Page</h2> */}
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label" style={{fontWeight: "bold", fontSize: "22px", letterSpacing:"2px" }}>Email</label>
                        <input
                            type="email"
                            className="form-control bg-dark text-white border-0 rounded"
                            style={{ padding: "12px", border: "1px solid #555", fontSize:"19px" }}
                            id="email"
                            value={session.user.email}
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: "bold", fontSize: "22px", letterSpacing:"2px" }}>Name</label>
                        <input
                            type="text"
                            className="form-control bg-dark text-white border-0 rounded"
                            style={{ padding: "12px", border: "1px solid #555", fontSize:"19px" }}
                            id="name"
                            value={session.user.name}
                            readOnly
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <h4 style={{ fontFamily: "kufi", fontWeight: "bold", fontSize: "24px", letterSpacing:"2px"  }}>Payment</h4>
                        <p className=" text-muted" style={{ fontFamily: "kufi", fontSize: "19px" }}>All transactions are secure and encrypted.</p>
                        <div
                            className="p-4 shadow"
                            style={{
                                backgroundColor: "#212529", // Dark background
                                borderRadius: "12px",
                                color: "#ffffff", // White text
                            }}
                        >
                                <h4 className="fw-bold mb-3" style={{ fontSize: "22px" }}>
                                    Easypaisa Payment Details
                                </h4>
                            {/* Bank Details */}
                            <div
                                className="p-3"
                                style={{
                                    backgroundColor: "#adb5bd", // Slightly lighter background
                                    borderRadius: "12px",
                                    color: "#212529",// dark text
                                    fontSize:"19px",
                                    letterSpacing:"1px"
                                }}
                            >
                                <p>
                                    <strong>IBAN:</strong> PK95TMFB0000000066485822
                                    <span
                                        className="ms-2"
                                        style={{ cursor: "pointer" }} // Pointer cursor for clickable
                                        onClick={() => handleCopy("PK95TMFB0000000066485822", "iban")}
                                    >
                                        {copySuccess.iban ? (
                                            <AiOutlineCheck size={20} color="green" strokeWidth={1} style={{ marginBottom:'6px'}}/>
                                        ) : (
                                            <GoCopy size={20} color="#edf2f4" strokeWidth={1} style={{ marginBottom:'6px'}} />
                                           // #212529
                                        )}
                                    </span>
                                </p>

                                <p>
                                    <strong>Account No:</strong> 03212355844
                                    <span
                                        className="ms-2"
                                        style={{ cursor: "pointer" }} // Pointer cursor for clickable
                                        onClick={() => handleCopy("03212355844", "account")}
                                    >
                                        {copySuccess.account ? (
                                            <AiOutlineCheck size={20} color="green" strokeWidth={1} style={{ marginBottom:'6px'}} />
                                        ) : (
                                            <GoCopy size={20} color="#edf2f4" strokeWidth={1} style={{ marginBottom:'6px'}}/>
                                        )}
                                    </span>
                                </p>

                                <p><strong>Account Title:</strong> SHEHARYAR HUSSAIN KHATRI</p>
                            </div>
                            <p
                            className="d-flex align-items-center fw-bold mt-3"
                            style={{ fontSize: "19px", width: "max-content", color:"#f09042" }}
                        >
                            <CgDanger size={30} className="me-2 mb-2" />
                            Please send the payment receipt via
                            <a href="https://wa.me/923331315205" style={{ marginLeft: '5px', color: 'inherit' }}>
                                WhatsApp
                            </a>
                        </p>
                        </div>
                    </div>
                    {!orderCompleted && (
                    <div className="d-flex align-items-center mb-2 mt-2">
                        <button
                            className="btn btn-outline-light me-2"
                            style={{
                                backgroundColor: "#313131",
                                borderRadius: "12px",
                                color: "#ffffff",
                                border: "1px solid #333",
                            }}
                            onClick={() => handleCreditChange(-1)}
                            disabled={orderCompleted}
                        >
                            <FaMinus />
                        </button>
                        <div className="mx-3 d-flex justify-content-center align-items-center">
                            <input
                                type="number"
                                className="form-control text-center bg-dark text-white border-0 rounded-3"
                                value={credits}
                                readOnly
                                style={{
                                    maxWidth: 'max-content',
                                    backgroundColor: orderCompleted ? "#343a40" : "#495057",
                                    cursor: orderCompleted ? "not-allowed" : "text",
                                    transition: "background-color 0.3s ease",
                                    fontFamily: "kufi",
                                    fontSize:'20px'
                                }}
                                disabled={orderCompleted}
                            />
                        </div>
                        <button
                            className="btn btn-outline-light me-2"
                            style={{
                                backgroundColor: "#313131",
                                borderRadius: "12px",
                                color: "#ffffff",
                                border: "1px solid #333",
                            }}
                            onClick={() => handleCreditChange(1)}
                            disabled={orderCompleted}
                        >
                            <FaPlus />
                        </button>
                        <button
                            className="CCP_Button ms-2"
                            onClick={handleConfirm}
                            disabled={orderCompleted}
                        >
                            Confirm
                        </button>
                    </div>
                     )}
                </div>
               

                {/* Receipt and Success Window Section */}
                <div className="d-flex flex-column" style={{ width: "48%" }}>
                    {/* Receipt Section */}
                    {confirmed && (
                        <div
                            className="card p-4 shadow mb-3"
                            style={{
                                backgroundColor: "#0d1117", // Dark background
                                borderRadius: "12px",
                                color: "#ffffff", // White text for contrast
                                fontFamily: "'Courier New', Courier, monospace", // Typical receipt font
                                maxWidth: "420px", // Limit the width for a more realistic receipt look
                                fontSize:"18px"
                            }}
                        >
                            <button
                                className="btn btn-light position-absolute"
                                style={{
                                    top: "10px",
                                    right: "10px",
                                    padding: "5px 10px",
                                }}
                                onClick={() =>
                                    handleCopy(
                                        `Name: ${session.user.name}\nEmail: ${session.user.email}\nCredits to Buy: ${credits}\nPrice per Credit: ${pricePerCredit} RS\nTotal Price: ${totalPrice} RS`,
                                        "receipt"
                                    )
                                }
                            >
                                {copySuccess.receipt ? (
                                    <AiOutlineCheck size={20} color="green" strokeWidth={1} />
                                ) : (
                                    <GoCopy size={20} strokeWidth={1} />
                                )}
                            </button>

                            {/* Receipt Title */}
                            <h4
                                style={{
                                    fontFamily: "kufi",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                    textAlign: "center",
                                    borderBottom: "2px dashed #555", // Dashed line with subtle contrast
                                    paddingBottom: "10px",
                                    marginBottom: "20px",
                                    letterSpacing:'3px'
                                }}
                            >
                                Receipt
                            </h4>

                            {/* Receipt Details */}
                            <div
                                className="p-3"
                                style={{
                                    backgroundColor: "#212529", // Slightly lighter dark background
                                    borderRadius: "12px",
                                    color: "#ffffff",
                                    lineHeight: "1.8",
                                }}
                            >
                                <p><strong>Name:</strong> {session.user.name}</p>
                                <p><strong>Email:</strong> {session.user.email}</p>
                                <p><strong>Credits to Buy:</strong> {credits}</p>
                                <p><strong>Price per Credit:</strong> {pricePerCredit} RS</p>
                                <p><strong>Total Price:</strong> {totalPrice} RS</p>

                                {/* Simulate cut line */}
                                <hr
                                    style={{
                                        borderTop: "1px dashed #fff", // Dashed line for separation
                                        marginTop: "20px",
                                        marginBottom: "20px"
                                    }}
                                />
                                <p
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "center",
                                        marginTop: "10px",
                                        fontStyle: "italic",
                                        color: "#ccc", // Muted closing text
                                    }}
                                >
                                    Thank you for your purchase!
                                </p>
                            </div>

                            {/* Complete Order Button */}
                            {confirmed && !orderCompleted && (
                            <button
                                className="CCP_Order fw-bold w-100 mt-4"
                                onClick={handleCompleteOrder}
                                disabled={orderCompleted}
                                style={{ borderRadius: "8px", border: '3px solid #212529', fontFamily:"kufi", letterSpacing:"2px" }}
                            >
                                Complete Order
                            </button>
                            )}
                        </div>
                    )}

                    {/* Success Window */}
                    {orderCompleted && (
                        <div
                            className="card p-4 shadow"
                            style={{
                                backgroundColor: "#dff0d8",
                                borderRadius: "12px",
                                color: "#3c763d",
                                border: "1px solid #3c763d",
                            }}
                        >
                            <h4 style={{ fontFamily: "kufi", fontSize: "28px", }}>
                                <AiFillCheckCircle size={40} color="green" /> Thank you!
                            </h4>
                            <p style={{ fontFamily: "kufi", fontSize: "20px" }}>Your order has been placed and will be processed shortly.</p>

                            <p style={{ display: 'flex', alignItems: 'center' }}>
                                <CgDanger size={30} style={{ marginRight: '8px' }} />
                                <strong>
                                    Send the payment receipt & details to our   <a href="https://wa.me/923331315205" style={{ color: 'inherit' }}>
                                        WhatsApp
                                    </a> to proceed.
                                </strong>
                            </p>

                            <Link
                                href={`https://wa.me/923331315205?text=${encodeURIComponent(
                                    `Hello, I have completed the payment. Here are my details:\nName: ${session.user.name}\nEmail: ${session.user.email}\nCredits Requested: ${credits}\nTotal Price: ${totalPrice} RS`
                                )}`}
                                className="btn btn-success d-flex align-items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ maxWidth: 'max-content' }}
                            >
                                <ImWhatsapp size={30} />
                                Send Receipt Directly
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreditsCheckoutPage;
