import React from 'react';

//?STYLES
import './Projects.css';

//?IMAGES
import DescriptionImage from '../../images/projects/description-image.jpg';

//?COMPONENTS
import LinkButton from '../../components/buttons/LinkButton';

const Projects = () => {
	return (
		<div className="Projects">
			<div className="page-description">
				<div className="pd-media">
					<img
						src={DescriptionImage}
						alt="Full stack"
						className="pd-image"
					/>
					<LinkButton text="View Full Stack Projects" link="#" />
				</div>
				<div className="pd-texts">
					<p className="pd-subtitle">
						My main focus is on developing website applications.
						With the help of ReactJs, I made static websites from
						school projects to personal ones. I also used NodeJs and
						ExpressJs, together with ReactJs, I created multiple
						client-server websites.
					</p>
					<h1 className="pd-title">Projects</h1>
					<div className="pd-buttons">
						<LinkButton text="My works" link="#" />
						<LinkButton text="Buy me a coffee" link="#" />
					</div>
				</div>
			</div>
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
