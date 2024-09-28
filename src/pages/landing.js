import React, { Suspense, lazy } from "react";
import Footer from "./footer";
import "./styles.css";
// import Typed from 'react-typed';
import { ReactTyped as Typed } from "react-typed";

import { Link } from "react-scroll";
import { MY_DATA } from "../data";
import aboutImage from "../images/sanjivani.jpg";
import About from "./about";
import Collab from "./collab";
import Experience from "./experience";
import Projects from "./projects";

const LandingPage = () => {
  const { personalDetails } = MY_DATA;
  return (
    <div className="landing-body">
      <div className="text-center avatar">
        <img
          src={aboutImage}
          alt="ArjunMore-avatar"
          className="landingPage-avatar"
        />
        <h3 className="landingPage-heading mt-4">Hey, I am</h3>
        <p className="landingPage-name">{personalDetails.name.toUpperCase()}</p>
      </div>
      <div className="text-center p-3">
        <Suspense fallback={<div>Loading...</div>}>
          <Typed
            className="typedContent"
            strings={personalDetails.canDo}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Suspense>
      </div>
      {personalDetails?.canDoDetails?.map((x) => {
        return <p className="landingPage-subheading text-center px-3">{x}</p>;
      })}
      <br />
      <div className="socialIcons col-md-4 m-auto pb-5">
        <div className="rounded-social-buttons text-center">
          {personalDetails?.social?.map((x) => {
            return (
              <a href={x.link} target="_blank" rel="noreferrer">
                <span className={`circle-button ${x.icon}`} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="p-4 downArrows">
        <div className="circle">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <i className="fas fa-angle-double-down" />
          </Link>
        </div>
      </div>
      <About />
      <Collab />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default LandingPage;
