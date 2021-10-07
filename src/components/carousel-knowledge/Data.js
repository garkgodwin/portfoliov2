//?COMPONENTS
import Image from '../images/Image';

//?IMAGES
import ImageReact from '../../images/home/knowledge/knowledge-react.svg';
import ImageNode from '../../images/home/knowledge/knowledge-node.svg';
import ImageJava from '../../images/home/knowledge/knowledge-java.svg';
import ImagePython from '../../images/home/knowledge/knowledge-python.svg';
import ImageCsharp from '../../images/home/knowledge/knowledge-csharp.svg';

import ImageGithub from '../../images/home/knowledge/knowledge-github.svg';
import ImageStack from '../../images/home/knowledge/knowledge-stack.svg';

import ImageMongo from '../../images/home/knowledge/knowledge-mongo.svg';
import ImageMysql from '../../images/home/knowledge/knowledge-mysql.svg';
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
		title: 'Java',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageJava} />,
		cName: '',
		link: '#',
		linkText: 'View my Java projects',
	},
	{
		title: 'Python',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImagePython} />,
		cName: '',
		link: '#',
		linkText: 'View my Python projects',
	},
	{
		title: 'C#',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageCsharp} />,
		cName: '',
		link: '#',
		linkText: 'View my C# projects',
	},
	{
		title: 'Mongo DB',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageMongo} />,
		cName: '',
		link: '#',
		linkText: 'View my mongo projects',
	},
	{
		title: 'MySQL DB',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageMysql} />,
		cName: '',
		link: '#',
		linkText: 'View my mysql projects',
	},
	{
		title: 'Stack Overflow',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageStack} />,
		cName: '',
		link: '#',
		linkText: 'View my Stack Overflow Profile.',
	},
	{
		title: 'Github',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolor sint assumenda, placeat nobis labore quo beatae provident praesentium. Odit!',
		image: <Image cName="image-carousel" src={ImageGithub} />,
		cName: '',
		link: '#',
		linkText: 'View my Github Profile.',
	},
];
