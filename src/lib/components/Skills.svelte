<script>
	import Icons from './Icons.svelte';
	import RomanTitle from './RomanTitle.svelte';
	let title = '';
</script>

<section class="px-8">
	<RomanTitle title="Skills" />
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 md:gap-y-14 mt-12 justify-items-center items-center"
	>
		<Icons />
	</div>
</section>
