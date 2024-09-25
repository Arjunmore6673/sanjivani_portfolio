import React from 'react';
import './styles.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import { MY_DATA } from '../data';

function Experience() {
  const getDesc = (x) => {
    return x.desc?.split('//n').map((item) => {
      if (!item) return;
      return <div>-{item}</div>;
    });
  };

  const { experiance } = MY_DATA;
  return (
    <div className="experience-section">
      <p className="experiencePage-name text-center pt-5">{experiance.title}</p>
      {/* <p className="experiencePage-subheading text-center">
        Some of Projects in which i worked on while working with different
        organization
      </p> */}
      <VerticalTimeline layout={'1-columns'} className="mt-5">
        {experiance?.list?.map((x) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#f5aa09', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3
                style={{ color: '#f5aa09', display: 'flex' }}
                className="vertical-timeline-element-title"
              >
                <span style={{ flex: 1, width: '100%' }}>
                  {x.company}

                  <span style={{ fontSize: 14, marginLeft: 5 }}>
                    {' '}
                    {x.designation}
                  </span>
                </span>

                <span style={{ fontSize: 14 }}>
                  {x.startDate}- {x.endDate}
                </span>
              </h3>

              <p>{getDesc(x)}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
