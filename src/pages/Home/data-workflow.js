import ImageResearch from '../../images/home/workflow/workflow-research.svg';
import ImagePlan from '../../images/home/workflow/workflow-plan.svg';
import ImageDevelop from '../../images/home/workflow/workflow-develop.svg';
import ImageTest from '../../images/home/workflow/workflow-test.svg';
import ImageDeploy from '../../images/home/workflow/workflow-deploy.svg';

export const workflow = [
	{
		title: '1. Research',
		src: ImageResearch,
		alt: 'First Workflow: Research',
		description:
			'As title is given for development, I always go for research for similar applications that will help greatly for the next step.',
		cName: 'wf-1',
	},
	{
		title: '2. Plan',
		src: ImagePlan,
		alt: 'Second Workflow: Plan',
		description:
			'When research is done, I plan for everything. From the technologies I will be using to the scheduling of development included the time limit of each task.',
		cName: 'wf-2',
	},
	{
		title: '3. Develop',
		src: ImageDevelop,
		alt: 'Third Workflow: Develop',
		description:
			'I develop my projects using the DRY Principle. To make the code easier to debug and maintain.',
		cName: 'wf-3',
	},
	{
		title: '4. Test',
		src: ImageTest,
		alt: 'Fourth Workflow: Test',
		description:
			'Honestly, I am new to testing my projects. I test each project carefully mainly to avoid client complaints.',
		cName: 'wf-4',
	},
	{
		title: '5. Deploy',
		src: ImageDeploy,
		alt: 'Fifth Workflow: Deploy',
		description:
			'This step is not as easy as it is pronounced, but with the given technologies nowadays, it is.',
		cName: 'wf-5',
	},
];
