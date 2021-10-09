import React from 'react';

//?STYLES
import './About.css';

//?CONTAINERS
import Section from '../../containers/Section';

//?COMPONENTS
import Title from '../../components/texts/Title';
import Description from '../../components/texts/Description';

const About = () => {
	const description1 = "a student currently on my Fourth year in the Bachelor of Science in Information Technology.";
	const description2 = "to make bugs and fix it myself."
	return ( 
		<div className="About">
			<Section cName="about-section section-1">
				<Title cName="title-about title-1" text="I am"/>
				<Description cName="description-about description-1" text={description1}/>
			</Section>
			<Section cName="about-section section-3">
				<div className="sh-box">
				<Title cName="title-about title-2" text="I love"/>
				<Description cName="description-about description-2" text={description2}/>
				</div>
			</Section>
		</div>
	);
};

export default About;
