<script lang="ts">
	import RomanTitle from './RomanTitle.svelte';
	import selfie from '$lib/images/selfie.jpg';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView: Boolean;
</script>

<section
	class="mb-20 lg:min-h-fit"
	id="about"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-35%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<RomanTitle title="About Me" />
		<div in:fade class="grid grid-cols-1 md:grid-cols-2">
			<div class="text-cream">
				<p class="pt-10">
					Hello! My name is Clinton Schlosser and I am a self taught front end web developer. I have
					had an interest in web development coming out of high school but decided to go a different
					route in college. I became an Athletic Trainer for six years and finally decided that I
					wanted to dive into web development full time. I have been learning HTML and CSS since
					2019.
				</p>
				<p class="pt-4">
					During 2021, I dove into JavaScript, Svelte, and React. I have been lucky enough to have
					brothers that are in the industry and have been helping me along the way. My main focus
					these days is to continue to grow in these languages and one day start into back end web
					development.
				</p>
				<p class="pt-4">
					I also have had some experience with building my own database on Supabase and running one
					of my applications through it using Svelte.
				</p>
			</div>
			<div class="place-self-center mt-6">
				<img class="w-auto h-auto rounded-full" src={selfie} alt="Selfie" />
			</div>
		</div>
	{/if}
</section>
