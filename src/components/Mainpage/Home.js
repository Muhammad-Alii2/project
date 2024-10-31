import React from "react";
import { getAuthSession } from "@/lib/auth";
import AuthButton from "../AuthButton";


const Home = async () => {
  const session = await getAuthSession();
  return (
    <div className="home-container" style={{ fontFamily: "kufi", color: "", fontWeight: "bold" }}>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  className="img" src="/images/mainpage/home-banner-background.png" alt="Description" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-subheading">Learning through AI</h1>
          <h1 className="Home-primary-heading">
            Effortless course creation with <span>
            Ins<span className="" style={{fontFamily:"Android101", color:"#fe9e0d"}}>AI</span>ghtful
        </span>
          </h1>
          <p className="primary-text">
            Create courses effortlessly. Customize units to your needs.  <span className="openai">Openai API</span> will compile playlists & <span className="youtube">Youtube API</span> will curated video content for you.
          </p>
          {/* Here is Login & logout buttons */}
          <div className="Home-secondary-button">
            <AuthButton session={session}/>
          </div>
          {/* */}
        </div>
        <div className="home-image-section">
          <img className="img" src="/images/mainpage/CourseCreation.jpg" alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Home;
