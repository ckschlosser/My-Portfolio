<script lang="ts">
	import Icons from './Icons.svelte';
	import RomanTitle from './RomanTitle.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView: Boolean;
	let title = '';
</script>

<section
	class="px-8 md:min-h-fit"
	id="skills"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-35%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<RomanTitle title="Skills" />
		<div
			in:fade
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 md:gap-y-14 mt-12 justify-items-center items-center"
		>
			<Icons />
		</div>
	{/if}
</section>
