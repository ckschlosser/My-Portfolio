<script>
	import RomanTitle from './RomanTitle.svelte';
	import Button from './Button.svelte';
</script>

<section class="min-h-fit">
	<RomanTitle title="Contact Me" />
	<div class="flex justify-center">
		<div>
			<h2 class="text-4xl font-bold text-lighterGray text-center mt-8">Let's Get In Touch</h2>
			<p class="mt-8 text-center text-mainWhite max-w-lg">
				I'm currently looking for any oppurtunities! I'm always available, whether you have some
				questions or just want to connect. I will do my best to get back to you.
			</p>
			<div class="flex justify-center mt-10">
				<Button
					name="Contact Here"
					href="mailto:ckschlosser13@gmail.com"
					border="-2"
					paddingX="6"
					paddingY="4"
				/>
			</div>
		</div>
	</div>
</section>
