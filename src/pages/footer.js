import React from "react";
import "./styles.css";
import { MY_DATA } from "../data";

function Footer() {
  const { personalDetails } = MY_DATA;
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-cta pt-4 pb-3">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4 className="landingPage-heading">Find me</h4>
                  <span>{personalDetails.findMe}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4 className="landingPage-heading">Call me</h4>
                  <span>
                    <a href={`tel:${personalDetails.number}`}>
                      {personalDetails.number}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4 className="landingPage-heading">Mail me</h4>
                  <span>
                    <a href={`mailto:${personalDetails.mail}`}>
                      {personalDetails.mail}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <h3 className="landingPage-heading">{personalDetails.name}</h3>
                <div className="footer-text">
                  <p>{personalDetails.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30"></div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                {/*<div className="footer-widget-heading">*/}
                {/*    <h3  className="landingPage-heading">Show your Interest</h3>*/}
                {/*</div>*/}
                {/*<div className="footer-text mb-25">*/}
                {/*    <p>If you have short query or want quick response, just post it here. I will respond as soon as possible.</p>*/}
                {/*</div>*/}
                {/*<div className="subscribe-form mb-3">*/}
                {/*    <form action="#">*/}
                {/*        <input type="text" placeholder="Email Address" />*/}
                {/*        <button><i className="fab fa-telegram-plane"></i></button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                <div className="footer-social-icon">
                  <span className="landingPage-heading">Connect with me</span>
                  <div className="rounded-social-buttons">
                    <a
                      href={personalDetails.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="circle-button linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}, All Right
                  Reserved <span>{personalDetails.name}</span>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              {/*<p className="landingPage-heading" style={{color:'#f5aa09'}} >May the source be with you :) </p>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
