<script lang="ts">
	import RomanTitle from './RomanTitle.svelte';
	import Button from './Button.svelte';
</script>

<section class="min-h-fit" id="contact">
	<RomanTitle title="Contact Me" />
	<div class="flex justify-center">
		<div>
			<h2 class="text-2xl sm:text-4xl font-bold text-lighterGray text-center mt-8">
				Let's Get In Touch
			</h2>
			<p class="mt-8 text-center text-mainWhite max-w-lg">
				I'm currently looking for any oppurtunities! I'm always available, whether you have some
				questions or just want to connect. I will do my best to get back to you.
			</p>
			<div class="flex justify-center my-10">
				<Button
					name="Contact Here"
					href="mailto:ckschlosser13@gmail.com"
					paddingX="4"
					paddingY="2"
					border="border-2"
				/>
			</div>
		</div>
	</div>
</section>
