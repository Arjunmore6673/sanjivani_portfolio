import React from "react";
import "./styles.css";
import { MY_DATA } from "../data";

function Collab() {
  return (
    <div className="collab">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1 className="hiringPage-subheading  p-5">
              {" "}
              May I help you with my knowledge?
            </h1>
          </div>
          <div className="col-md-2 p-5">
            <a target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-lg">
                <span className="hireButton">
                  <a
                    href={`mailto:${MY_DATA.personalDetails.mail}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Email Me
                  </a>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collab;
