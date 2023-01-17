# Personal Portfolio for Front End Web Development with SvelteKit/Tailwind CSS

## A fully functional Personal Portfolio showcasing experience in design, responsiveness, and other projects!

This project is a personal portfolio to showcase my front end skills. The portfolio was started with SvelteKit npm create. This project shows how to do the following:

- Create a fully functional and responsive Svelte portfolio
- Use of scrollIntoView animation
- Use of Fade in animation
- How to build a simple portfolio design

## Skills used in project

- HTML5
- Tailwind CSS
- SvelteKit
- TypeScript

## Some of the code I am proud of

This code shows how to create a fade in animation when you get to -35% of the sections margin!

```SvelteKit
<section
	class="mt-12 sm:px-8"
	id="projects"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-35%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade>
			<RomanTitle title="My Work" />
			<Projects {projects} />
		</div>
	{/if}
</section>
```

# Vists the [My Portfolio](https://clinton-schlosser.netlify.app/)
