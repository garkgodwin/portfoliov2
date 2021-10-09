import React from 'react';

//?STYLES
import './Projects.css';

//?CONTAINERS
import Section from '../../containers/Section'

//?COMPONENTS
import LinkButton from '../../components/buttons/LinkButton';
import Title from '../../components/texts/Title';
import Description from '../../components/texts/Description';
const Projects = () => {
	const description1 = "My main focus is on developing website applications. With " +
					"the help of ReactJs, I made static websites from school " +
					"projects to personal ones. I also used NodeJs and ExpressJs, " +
					"together with ReactJs, I created multiple client-server websites."
					
	return (
		<div className="Projects">
			<Section cName="section-projects section-1">
			<div className="sh-box">
				<Description cName="description-projects description-1" text={description1}/> 
				</div>
			<LinkButton text="View My Works" link="https://github.com/garkgodwin?tab=repositories"/> 
			</Section>
		</div>
	);
};

/*


			<div className="p-section section-1">
				<p className="ps ps-text">
					My main focus is on developing website applications. With
					the help of ReactJs, I made static websites from school
					projects to personal ones. I also used NodeJs and ExpressJs,
					together with ReactJs, I created multiple client-server
					websites.
				</p>
			</div>
			<div className="p-section section-2">Section 2</div>

*/

export default Projects;
