import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

function education() {
	return (
		<div className="experience-section">
			<p className="experiencePage-name text-center pt-5">EDUCATION</p>
			<p className="experiencePage-subheading text-center">The stuff I am made up of</p>
			<VerticalTimeline className="mt-5">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'white', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  white' }}
					date="Jun'18 - Present"
					iconStyle={{ background: '#f5aa09', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">B.E - Computer Science</h3>
					<h4 className="vertical-timeline-element-subtitle"><a href="https://www.aitpune.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#f5aa09' }}>Army Institute of Technology</a> Pune, India</h4>
					{/* <p>
				Involved in performing analytics of their data to get meaningful results, end to end testing, platform releases, UI refactoring with backend API's.
				</p> */}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Apr'16 - Apr'17"
					iconStyle={{ background: '#f5aa09', color: '#fff' }}
					icon={<SchoolIcon />}

				>
					<h3 className="vertical-timeline-element-title">Senior Secondary</h3>
					<h4 className="vertical-timeline-element-subtitle"><a href="https://kvsangathan.nic.in/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#f5aa09' }}>Kendriya Vidyalaya No.3 </a> Gwalior, India</h4>
					{/* <p>
        Involved in developing admin-side panel of our AI platform, refactoring UI/UX, implemented new features for users.
				</p> */}
				</VerticalTimelineElement>

				<VerticalTimelineElement
					iconStyle={{ background: '#f5aa09', color: '#fff' }}
					icon={<SchoolIcon />}


				/>
			</VerticalTimeline>
		</div>
	)
}
export default education
