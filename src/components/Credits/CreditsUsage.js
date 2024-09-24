"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbHeartRateMonitor } from 'react-icons/tb';
import { BiCoinStack } from 'react-icons/bi';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import style from "@/styles/buttons/C_buttons.css";
import sidebarStyles from "@/styles/sidebar.css";

const CreditsUsage = ({ session }) => {
    const [historyEntries, setHistoryEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5; // Display 5 courses per page

    // Calculate the number of pages
    const totalPages = Math.ceil(historyEntries.length / entriesPerPage);

    // Slice the historyEntries to show the current page's items
    const currentEntries = historyEntries.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

    useEffect(() => {
        const fetchCreditHistory = async () => {
            try {
                const response = await fetch('/api/credits/fetchCreditHistory', {
                    method: 'POST'
                });
                const data = await response.json();
                if (data.success) {
                    setHistoryEntries(data.historyEntries);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCreditHistory();
    }, [session.userId]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container-fluid py-5 d-flex justify-content-center" style={{fontFamily:"kufi"}}>
            <div className="card border-0 p-4" style={{ background: '#0d1117', borderRadius: '12px', width: '100%', maxWidth: '1200px', height: 'max-content', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#c9d1d9' }}>

                {/* Heading */}
                <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                        <TbHeartRateMonitor size={50} style={{ color: '#f09042' }} />
                        <h4 className="ms-2 mb-0 mt-2" style={{ fontWeight: 'bold', color: '#c9d1d9', fontSize: "36px", letterSpacing:"1px" }}>Credits Usage</h4>
                    </div>
                    <p className="text-muted" style={{ fontSize: '22px', marginBottom: '0' }}>
                        Detailed history of your Credits Usage
                    </p>
                </div>

                {/* Credits Balance */}
                <div className="d-flex justify-content-between align-items-center p-3 mb-4" style={{ background: '#161b22', borderRadius: '8px' }}>
                    <div>
                        <h6 className="mb-1" style={{ color: '#c9d1d9', fontWeight: '600', fontSize: "24px", letterSpacing:"1px" }}>Credits Balance</h6>
                        <p className="text-muted" style={{ fontSize: '20px' }}>The amount of Credits you have at this moment.</p>
                        <Link href="/CreditsCheckoutPage">
                            <button
                                className="creditButton fw-bold"
                                style={{fontFamily:"kufi"}}>
                                Buy more Credits
                            </button>
                        </Link>
                    </div>
                    <div className="text-center d-flex justify-content-center align-items-center">
                        <h2 className="mb-0 mt-3" style={{ color: '#c9d1d9', fontWeight: '700', display: 'inline-flex', alignItems: 'center', fontSize: '60px' }}>
                            {session.user.credits}
                            <BiCoinStack size={54} style={{ color: '#c9d1d9', marginLeft: '8px', marginBottom:'8px' }} />
                        </h2>
                    </div>
                </div>

                {/* Credits Usage History Table */}
                <h6 style={{ color: '#c9d1d9', fontWeight: '600', fontSize:"22px" }}>Credits Usage History</h6>
                <div className="table-responsive">
                    <table className="table table-dark table-borderless" style={{ color: '#c9d1d9' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #30363d', fontSize:'22px' }}>
                                <th style={{ width: '20%', padding: '12px' }}>Action</th>
                                <th style={{ width: '25%', textAlign: 'center', padding: '12px' }}>Status</th>
                                <th style={{ width: '25%', textAlign: 'center', padding: '12px' }}>Credits</th>
                                <th style={{ width: '60%', textAlign: 'center', padding: '12px' }}>Date</th>
                                <th style={{ width: '60%', textAlign: 'center', padding: '12px' }}>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((entry) => (
                                    <tr key={entry.id} style={{ borderBottom: '1px solid #30363d', fontSize:'18px' }}>
                                        <td className="text-capitalize" style={{ padding: '12px' }}>{entry.actionPerformed}</td>
                                        <td style={{ textAlign: 'center', color: '#28a745', padding: '12px' }}>✔</td>
                                        <td style={{ textAlign: 'center', padding: '12px' }}>
                                            {`${entry.creditUpdate > 0 ? `+${entry.creditUpdate}` : entry.creditUpdate}`}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '12px' }}>
                                            {new Intl.DateTimeFormat('en-US', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short'
                                            }).format(new Date(entry.date))}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '12px' }}><Link href={`/course/${entry.courseId}/0/0`}><FaEye size={20} color='#f09042' /></Link></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-danger" style={{ padding: '12px', fontSize:'20px' }}>No credit usage history available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-3">
                        <nav>
                            <ul className="pagination">
                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(index + 1)} style={{ backgroundColor: '#161b22', color: '#c9d1d9', fontSize:'20px' }}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    ); 
};

export default CreditsUsage;