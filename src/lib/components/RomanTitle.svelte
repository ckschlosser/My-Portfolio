<script>
	export let title = '';
</script>

{#if title == 'Contact Me'}
	<div class="flex justify-center">
		<div class="flex-grow border-t border-mainOrange self-center mr-5 max-w-xs" />
		<li class="text-mainOrange text-xl sm:text-3xl pr-4 ml-10" />
		<h2 class="text-mainWhite text-xl sm:text-3xl font-semibold">{title}</h2>
		<div class="flex-grow border-t border-mainOrange self-center ml-5 max-w-xs" />
	</div>
{:else}
	<div class="flex">
		<li class="list-roman text-mainOrange text-xl sm:text-3xl pr-4" />
		<h2 class="text-mainWhite text-xl sm:text-3xl font-semibold">{title}</h2>
		<div class="flex-grow border-t border-mainOrange self-center ml-5 max-w-xs" />
	</div>
{/if}
