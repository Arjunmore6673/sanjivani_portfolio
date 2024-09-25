import React from 'react';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import { MY_DATA } from '../data';


function Projects() {
    const { projects } = MY_DATA;

    const getDesc = (x) => {
        return x.desc?.split("//n").map(item => {
            if (!item) return;
            return <div>
                -{item}
            </div>
        })
    }
    return (
        <div className="projectPage">
            <h1 className="Project-heading text-center pt-3">Projects</h1>
            <p className="project-subheading text-center">The application which I have developed using my knowledge</p>
            <div className="">
                <div className="row p-5 m-auto ">
                    {projects.map(x => {
                        return <div className="projectcard ">
                            <div className="header">
                                <h3>{x.title}</h3><br></br>
                                <h5>{getDesc(x)}
                                </h5>
                                {x.techStack && <h6>{x.techStack}</h6>}
                            </div>


                            {x.link &&
                                <div className="description">
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href={x.link}
                                        startIcon={<LanguageIcon />}
                                        target="_blank"
                                    >
                                        Demo
                                    </Button>

                                </div>
                            }

                        </div>

                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects