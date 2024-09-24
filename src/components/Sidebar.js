import React from "react";
import Link from "next/link";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "../components/UserAccountNav";
import SignInButton from "../components/SignInButton";
import SignOutButton from "../components/SignOutButton";
import { FaBookMedical } from "react-icons/fa6";
import { FcGallery, FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { MdDataUsage } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import "../styles/fonts.module.css";
import sidebarStyles from "@/styles/sidebar.css";

const Sidebar = async () => {
  const session = await getAuthSession();
  const isAdmin = session?.user?.role === 'admin';
  return (
    <>
      <nav className="navbar fixed-fliud sticky-top border-0"
        style={{ backgroundColor: '#0d1117'}}>
        <div className="container-fluid">
           {/* Menu Hamburger */}
          <button
            className="btnmenu"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="icon">
              <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              </svg>
            </span>
          </button>
          <Link
            className="fs-1 lh-1 navbar-brand text-light m-2"
            href="/"
            style={{ fontFamily: "kufi"}}
          >
            {" "}
            <div>
            Ins<span className="" style={{fontFamily:"Android101", color:"#f09042"}}>AI</span>ghtful
            </div>
          </Link>
          {/* Display credits & plan/role here */}
          {session?.user && (
            <Link
              href="/credit"
              className="ms-auto me-3 sidebarBtn text-decoration-none"
              style={{fontFamily:'kufi'}}
              >
              <span>
                Credits: {session.user.credits}
              </span>
            </Link>
          )}
          {session?.user && (
            <span className="sidebarBtn" style={{fontFamily:'kufi'}}>
              {isAdmin ? (
                <Link href="/admin"
                  className="sidebarBtn text-capitalize"
                >
                  Role: {session.user.role}
                </Link>
              ) : (
                <Link href="/credit"
                  className="sidebarBtn text-capitalize "
                >
                  Plan: {session.user.role}
                </Link>
              )}
            </span>
          )}
        </div>
        <div
          className="offcanvas offcanvas-start border-0"
          style={{background:'#0d1117'}}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
          </div>
          <div className="offcanvas-body" style={{fontFamily:"kufi"}}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <span className="text-muted">USER PANEL</span>
             {/* USER PANEL*/}
              <li>
                {session?.user && <UserAccountNav user={session.user} />}
              </li>
              <span className="text-muted mt-5">MANAGE</span>
              {session?.user && (
                <li className="nav-item">
                  <Link
                    className={`m-1 nav-link btn fw-bold text-start sidebarButton`}
                    href="/create"
                  >
                    {" "}
                    <FaBookMedical size={25} style={{marginBottom:"6px"}} /> Create Course
                  </Link>
                </li>
              )}
              {session?.user && (
                <li className="nav-item">
                  <Link
                    className={` m-1 nav-link btn fw-bold text-start sidebarButton`}
                    href="/gallery"
                  >
                    {" "}
                    <FcGallery size={25} style={{marginBottom:"6px"}}  /> Gallery
                  </Link>
                </li>
              )}
              {session?.user && (
              <Link
                className={` m-1 nav-link btn fw-bold text-start sidebarButton`}
                href="/credit"
              >
                <li className="nav-item">
                  {" "}
                  <MdDataUsage size={25} style={{marginBottom:"6px"}} /> Credits Usage
                </li>
              </Link>
               )}
               {session?.user && (
              <Link
                className={` m-1 nav-link btn fw-bold text-start sidebarButton`}
                href="/CreditsCheckoutPage"
              >
                <li className="nav-item">
                  {" "}
                  <BsCoin size={25} style={{marginBottom:"6px"}} /> Buy Credits
                </li>
              </Link>
               )}

              <span className="text-muted mt-5">CONTACT DETAILS</span>
              <li className="nav-item">
                <Link
                  className={` m-1 nav-link btn fw-bold text-start sidebarButton`}
                  href="/"
                >
                  {" "}
                  <FcAbout size={25} style={{marginBottom:"5px"}}  /> About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={` m-1 nav-link btn fw-bold text-start sidebarButton`}
                  href="/contact"
                >
                  {" "}
                  <GrContact size={25} style={{marginBottom:"1px"}}  /> Contact us
                </Link>
              </li>
            </ul>
            <div className="fixed-bottom m-3">
              <div>
                {session?.user && <SignOutButton/>}
              </div>
              <div>{!session?.user && <SignInButton />}</div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
