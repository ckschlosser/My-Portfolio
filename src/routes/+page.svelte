<script>
	import Nav from '$lib/components/Nav.svelte';
	import FixedAsideText from '$lib/components/FixedAsideText.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Work from '$lib/components/Work.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!--At MD (768px):
	Need to hide nav items and side bars
	Collapse About me section into 1 col
-->

<Nav />
<FixedAsideText />
<main class="container mx-auto px-36">
	<Hero />
	<ul class="list-roman">
		<About />
		<Skills />
		<Work />
		<Contact />
	</ul>
</main>
<Footer />

<style>
	:global(body) {
		background-color: #252322;
		font-family: 'Times New Roman', Times, serif;
	}
	:global(section) {
		min-height: 100vh;
		place-content: center;
		max-width: 4xl;
		margin: auto;
	}
</style>
