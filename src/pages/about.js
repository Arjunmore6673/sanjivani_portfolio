import React from "react";
import "./styles.css";
import aboutImage from "../images/Arjun.jpg";
import {MY_DATA} from '../data'

function About() {

    const {techStack,personalDetails} = MY_DATA;
    return (
        <div className="aboutPage mt-5" id="about">
            <div className="container">
                <p className="experiencePage-name text-center pt-4">ABOUT ME</p>

                <div
                    className="row"
                    style={{marginTop: "5%", display: "flex", justifyContent: "center"}}
                >
                    <div
                        className="col-xl-4 col-md-4 mb-30"
                        style={{
                            marginBottom: "5%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={aboutImage}
                            alt="Arjun more"
                            className="col-md-8 about-avatar"
                        />
                    </div>
                    <div
                        className="col-xl-4 col-md-4 mb-30"
                        style={{alignSelf: "center"}}
                    >
                        <p>
                            {personalDetails.mySelf[0]}
                            <br/>
                            <br/>
                            {personalDetails.mySelf[1]}
                        </p>
                    </div>
                </div>

                <div className=" py-5 mx-auto skillcards-wrapper row ">
                    <SkillCard details={techStack.web}/>
                    <SkillCard details={techStack.mobile}/>
                    <SkillCard details={techStack.backend}/>
                </div>
            </div>
        </div>
    );
}

export default About;

const getCamelName = (name = "") => {
    let result = name.split("") || [];
    return result?.map((x, i) => (i === 0 ? x.toUpperCase() : x.toLowerCase()));
};

const SkillCard = ({details = {}}) => {
    return (
        <div className="skillcard" style={{}}>
            <div
                className="header text-center"
                style={{
                    // width:'100%',
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    height: "80%",
                }}
            >
                {details?.tech?.map((x) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 10,
                            }}
                        >
                            <div style={{width: 40}}>
                                {x.icon && (
                                    <img
                                        src={x.icon}
                                        alt=""
                                        style={{
                                            width: 40,
                                            height: 40,
                                            padding: 3,
                                            borderRadius: 20,
                                            border: "1px solid red",
                                            backgroundColor: "white",
                                            boxShadow: "1px 1px 2px black",
                                        }}
                                    />
                                )}
                            </div>
                            <h5
                                style={{
                                    textAlign: "start",
                                    flex: 1,
                                    marginLeft: 20,
                                    // textShadow: "1px 1px 1px red",
                                }}
                            >
                                {getCamelName(x.name)}
                            </h5>
                        </div>
                    );
                })}
            </div>
            <div className="description ">
                <h5>{details?.title}</h5>
            </div>
        </div>
    );
};
