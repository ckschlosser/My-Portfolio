<script lang="ts">
	import Projects from './Projects.svelte';
	import RomanTitle from './RomanTitle.svelte';
	let title = '';
	let projects = [
		{
			title: 'ToDo List',
			src: '/ToDo-List.png',
			href: 'https://tasklist-cs.netlify.app/',
			gitHub: 'https://github.com/ckschlosser/Task-List',
			tools: 'VS Code, Svelte, TypeScript, Tailwind CSS, SupaBase',
			description:
				'ToDo list showcasing experience in a couple of my skills. The web application also uses a login page with your personal task list. This application showcases some of my API experience. Database was created and managed on Supabase.'
		},
		{
			title: 'Discord Landing Page Clone',
			src: '/DiscordClone.png',
			href: 'https://discord-clone-react-livid.vercel.app/',
			gitHub: 'https://github.com/ckschlosser/discord-clone-react',
			tools: 'VS Code, React, TypeScript, Tailwind CSS',
			description:
				'A landing page clone of the Discord application. The application has a fully functional mobile navigation and other small elements that the original page has. Since Discord has its own private font, the page looks slighty different from the original.'
		},
		{
			title: 'Movie API',
			src: '/Movie-API.png',
			href: 'https://movie-api-gray.vercel.app/',
			gitHub: 'https://github.com/ckschlosser/movie-api',
			tools: 'VS Code, React, Tailwind CSS, Javascript',
			description:
				'Designed and built a movie application that uses an API. The nav bar and search bar are fully functional and will change the movie cards that pop up. This application shows off some API usage. Also showcases some animations using Tailwind CSS on the movie cards and mobile sidebar.'
		}
	];
</script>

<section class="mt-12 sm:px-8" id="projects">
	<RomanTitle title="My Work" />
	<Projects {projects} />
</section>
