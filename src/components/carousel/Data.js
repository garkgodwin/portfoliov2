//?COMPONENTS
import Image from '../images/Image';

//?IMAGES
import ImageReact from '../../images/home/knowledge/knowledge-react.svg';
import ImageNode from '../../images/home/knowledge/knowledge-node.svg';
import ImageMongo from '../../images/home/knowledge/knowledge-mongo.svg';
export let data = [
	{
		title: 'React Js',
		description:
			'Single-page website development using React Js. ' +
			'With the help of the DRY principle, I can create a full range of usable components.',
		image: <Image cName="image-carousel" src={ImageReact} />,
		cName: '',
		link: '#',
		linkText: 'View my react projects',
	},
	{
		title: 'Node Js',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageNode} />,
		cName: '',
		link: '#',
		linkText: 'View my node projects',
	},
	{
		title: 'Mongo Js',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageMongo} />,
		cName: '',
		link: '#',
		linkText: 'View my mongo projects',
	},
	{
		title: 'Client and Server Websites',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageReact} />,
		cName: '',
		link: '#',
		linkText: 'View my react projects',
	},
];
