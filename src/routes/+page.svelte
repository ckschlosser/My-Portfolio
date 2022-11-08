<script>
	import Nav from '$lib/components/Nav.svelte';
	import FixedAsideText from '$lib/components/FixedAsideText.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sections from '$lib/components/Sections.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { openModal } from '$lib/store';
</script>

{#if $openModal}
	<Modal />
{/if}
<Nav />
<FixedAsideText />
<main class="container mx-auto md:px-36 px-10">
	<Sections />
	<Footer />
</main>

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
		padding-top: 90px;
	}
</style>
