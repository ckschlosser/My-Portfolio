<script>
	export let name = '';
	export let href = '';
	export let border = '';
	export let paddingY = '';
	export let paddingX = '';
	export let target = '';
	export let color = '';
</script>

<a
	class="{color} {border} {paddingY} {paddingX} border-mainOrange rounded-md hover:bg-mainOrange/[.2]"
	{href}
	{target}>{name}</a
>
