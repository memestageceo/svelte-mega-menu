export const faqs = [
	{
		question: 'How do I revert to an older release of Svelte in my project?',
		answer:
			'To revert to an older release of Svelte, specify the desired version in your `package.json` file, then run your package manager (npm or yarn) to update your dependencies.'
	},
	{
		question: 'How do I update the Svelte version in `package.json`?',
		answer:
			'Open the `package.json` file and find the Svelte dependencies. Change the version number to the desired older release, for example, `0.178`.'
	},
	{
		question: 'What command do I use to install the specified version with npm?',
		answer: 'Run `npm install` to install the specified version of Svelte.'
	},
	{
		question: 'What command do I use to install the specified version with yarn?',
		answer: 'Run `yarn install` to install the specified version of Svelte.'
	},
	{
		question: 'How can I verify the installed version of Svelte?',
		answer: 'Use `npm list svelte` or `yarn list svelte` to verify the installed version of Svelte.'
	}
];
