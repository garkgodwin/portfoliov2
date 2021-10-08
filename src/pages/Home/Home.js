import React from 'react';

//?DATA
import { workflow } from './data-workflow.js';

//?STYLES
import './Home.css';

//?IMAGES
import Me from '../../images/home/image-description.jpeg';

//?CONTAINERS
import Page from '../../containers/Page';
import Section from '../../containers/Section';

//?COMPONENTS
import Title from '../../components/texts/Title';
import Description from '../../components/texts/Description';
import Image from '../../components/images/Image';
import Carousel from '../../components/carousel-knowledge/Carousel';
import WorkflowCard from '../../components/cards/WorflowCard';

const Home = () => {
	//TODO: ADD COMPONENTS MORE FIX
	const sectionDescription1 = 'a child, a student, a developer and a person';
	const sectionDescription2 =
		'experience can be ignored with the right knowlede to accompany it';
	const sectionDescription3 = "to ease the client's curiosity";
	return (
		<Page cName="Page-home">
			<Section cName="ection-home section-1">
				<Title
					text="Gark Godwin Duque"
					cName="title-home title-1 center"
				/>
				<Description
					text={sectionDescription1}
					cName="description-home description-1"
				/>
			</Section>
			<Section cName="section-home section-2">
				<div className="sh-box sh-left">
					<Title text="My Knowledge Sea" cName="title-home title-2" />
					<Description
						text={sectionDescription2}
						cName="description-home description-2"
					/>
				</div>
				<div className="sh-box sh-right">
					<Image cName="image-home" src={Me} alt="Myself" />
				</div>
				<div className="sh-box sh-bottom">
					<Carousel />
				</div>
			</Section>

			<Section cName="section-home section-3">
				<div className="sh-box sh-3">
					<Title text="My Workflow" cName="title-home title-3" />
					<Description
						text={sectionDescription3}
						cName="description-home description-3"
					/>
				</div>
				<div className="sh-box sh-3 bottom">
					{workflow.map((data, index) => {
						return (
							<div className={'wf-box ' + data.cName} key={index}>
								<WorkflowCard data={data} />
							</div>
						);
					})}
				</div>
			</Section>
		</Page>
	);
};

export default Home;
