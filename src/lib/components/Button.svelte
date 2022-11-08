<script>
	export let name = '';
	export let href = '';
	export let border = '';
	export let paddingY = '';
	export let paddingX = '';
</script>

<a
	class="text-mainOrange {border} py-{paddingY} px-{paddingX} border-mainOrange rounded-md hover:bg-mainOrange/[.2]"
	{href}>{name}</a
>
