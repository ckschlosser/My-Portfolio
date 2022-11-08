<script>
	import Button from './Button.svelte';
	import NavModal from './Modal.svelte';
	function scrollIntoView({ target }) {
		const elemento = document.querySelector(target.getAttribute('href'));
		if (!elemento) return;
		elemento.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<header
	class="fixed top-0 w-screen bg-mainGray sm:bg-transparent sm:backdrop-blur-sm z-40 py-2 sm:py-6 px-4 sm:px-8"
>
	<nav class="flex items-center justify-between">
		<div>
			<a href="/">
				<svg
					class="w-8 h-8 sm:w-12 sm:h-12"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<image
						class="w-8 h-8 sm:w-12 sm:h-12"
						xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABpCAYAAABGUx/LAAAEkUlEQVR4nO2dy27UMBSG40wyM9wWlWDJa/RVWLW0YkM3CFjzDCCWLJBK2fBoLBA7oHOLkebGNMeeJPa5OeSXYGHnYn9zfHw7To29Os0Uy3qKZkCKAhUKy+QD6LpGFVQtMNsAdOnwPnGw0jBDIbokDlYCJiZAn0TAcsHkAOgTm3+lhikJsS5ya6WCqQmiSyRgsWFqh+gSmhvAgJkiQJeioYbC5Aa4q6DqkUAXmJwAfZXghFp/j69MezXBlLLAttdxlq/RDfhgaoXYdJ+oGyg8F1GLagBtJK216AlE1zu4oRpfM8eWxMIDtwuwlDC1LeCSWywFTJWr4Acig4oJUzvEutDdQAxMSnhtKob9/miLDYFJBbFrJajWKYOhtoUpbYXHRA11p8ZySu4BYXcA4juWnDBVLk5gigOmhv2fLPU9IG2LxuRuABNmKivuZNaag5QQFeMfmIVilMU0AhyYy/ljkPYfCgVmNX3wGiQiyBbjF9umaFKYrqL4TGPyEiRGPnL933LuTNfqn1Es08x+fQeJnR+Sn3ewQJXWiuMzq+orSGuvDRQb/Iz1/bacXIIcZuHA7ChbTi+xLcssZtfSFss9N9/4wsUtyCB6F6tvFbHMvkpjTLuEUGZFg2VCBc+K+g4zpiPqDHVo5s1qDZTbMvsSy+mURDPvLVCpZq7qMBSWNHRAa0e/Gt97A3ISk5refDT/8x57sXYrtimm1qGR3f8bFecgN1yGEq7+ceZq+WUPthifgfw4oUJNa9C+nN/swT46eQfyw7VZxhuVF1EPsVen2EFSqcTDN6lzPSgsk3s9kaLTynb1qCb334IcjyibOamzd4gEaj77/aFtHTgH7VybYZQTgsPngXpIzIAkju5RtAzwTMnefOOTyslLkIMvKr96R+JDo3wx+yTgV0nAalvPPOqTkIXuWzUvDnOCRRFVSKG6kxAcovKZpANpkKpE1B0QNVQ2uKuHJz+rJ08/g4zDQiHOzSUOQoWUwaWQ+oF7+rbVy+kGQKvr61avxBDLDBEdeLIDTEQNMBE1wETUABNRA0xESQRu9TbWSMoy8aGa/FltvZL9h5Nu5tEVtzuItvoGMpmlbQbUdc/GGluBRClpnU42QVXpd7XPzZPqrIahkd/6OwsTZopf3EItM3YzT2ETjOxH54g10iTS8nB0QJI7i737rtFO3B8HZW8VbWFSBEBhW6y4S+lqmVZZgIGq3c6QZk4VudHVDaj7cmJsb75ZoMhHmMdLdqoHGlAHHkSvNCF98GT173hJekIrN8U4c104Oyqfgxx9Qv3xyQbtZrW4VmqtZAvHOWfEblVOX4Ec6heb/Ixp5X0f0cEyRssXtx85rPUQoLHVDbgAT3c6xMNmzv2BpY1vLVB9KwfAzMfJ5zOdF1PILKN9K+fm2VEuPpj1m70PQFYrKLacXDB3bugn1DQchlqnm8UM3ECgzgYU+xcEOI+XcCm4FcYuwSVxCqKFVJ0DShXqsAeEIJIOleMvVWmBSj4i4dwDynr0yQmnRL7suhXpPBmkMEgyPAYbbHJ7QFQK9a+q9uVTPG+uMwwny7K/cEMgdt8ft4MAAAAASUVORK5CYII="
					/>
				</svg>
			</a>
		</div>
		<div>
			<a href="#/">
				<svg
					class="fill-mainWhite w-8 h-8 sm:w-12 sm:h-12 md:hidden"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					><path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/></svg
				>
			</a>
		</div>

		<div class="hidden md:flex text-md text-mainWhite items-center gap-x-10">
			<ul class="flex list-roman marker:text-mainOrange gap-x-12">
				<div>
					<li>
						<a
							href="#about"
							on:click|preventDefault={scrollIntoView}
							class="p-2 hover:text-mainOrange">About</a
						>
					</li>
				</div>
				<div>
					<li>
						<a
							href="#skills"
							on:click|preventDefault={scrollIntoView}
							class="p-2 hover:text-mainOrange">Skills</a
						>
					</li>
				</div>
				<div>
					<li>
						<a
							href="#projects"
							on:click|preventDefault={scrollIntoView}
							class="p-2 hover:text-mainOrange">Projects</a
						>
					</li>
				</div>
				<div>
					<li>
						<a
							href="#contact"
							on:click|preventDefault={scrollIntoView}
							class="p-2 hover:text-mainOrange">Contact</a
						>
					</li>
				</div>
			</ul>
			<div class="flex items-center">
				<Button name="Resume" href="/" paddingX="4" paddingY="2" border="border" />
			</div>
		</div>
	</nav>
</header>

<style>
</style>
