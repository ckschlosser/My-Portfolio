<script>
	import Button from './Button.svelte';
	let navItems = [
		{
			name: 'About',
			link: '/#about'
		},
		{
			name: 'Skills',
			link: '/#skills'
		},
		{
			name: 'Projects',
			link: '/#projects'
		},
		{
			name: 'Contact',
			link: '/#contact'
		}
	];
</script>

<header class="fixed top-0 w-screen backdrop-blur-sm z-50 py-6 px-8">
	<nav class="flex items-center justify-between">
		<div>
			<a href="/#home">
				<svg
					class="w-12 h-12"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<image
						class="w-12 h-12 hover:fill-mainWhite"
						xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABpCAYAAABGUx/LAAAEkUlEQVR4nO2dy27UMBSG40wyM9wWlWDJa/RVWLW0YkM3CFjzDCCWLJBK2fBoLBA7oHOLkebGNMeeJPa5OeSXYGHnYn9zfHw7To29Os0Uy3qKZkCKAhUKy+QD6LpGFVQtMNsAdOnwPnGw0jBDIbokDlYCJiZAn0TAcsHkAOgTm3+lhikJsS5ya6WCqQmiSyRgsWFqh+gSmhvAgJkiQJeioYbC5Aa4q6DqkUAXmJwAfZXghFp/j69MezXBlLLAttdxlq/RDfhgaoXYdJ+oGyg8F1GLagBtJK216AlE1zu4oRpfM8eWxMIDtwuwlDC1LeCSWywFTJWr4Acig4oJUzvEutDdQAxMSnhtKob9/miLDYFJBbFrJajWKYOhtoUpbYXHRA11p8ZySu4BYXcA4juWnDBVLk5gigOmhv2fLPU9IG2LxuRuABNmKivuZNaag5QQFeMfmIVilMU0AhyYy/ljkPYfCgVmNX3wGiQiyBbjF9umaFKYrqL4TGPyEiRGPnL933LuTNfqn1Es08x+fQeJnR+Sn3ewQJXWiuMzq+orSGuvDRQb/Iz1/bacXIIcZuHA7ChbTi+xLcssZtfSFss9N9/4wsUtyCB6F6tvFbHMvkpjTLuEUGZFg2VCBc+K+g4zpiPqDHVo5s1qDZTbMvsSy+mURDPvLVCpZq7qMBSWNHRAa0e/Gt97A3ISk5refDT/8x57sXYrtimm1qGR3f8bFecgN1yGEq7+ceZq+WUPthifgfw4oUJNa9C+nN/swT46eQfyw7VZxhuVF1EPsVen2EFSqcTDN6lzPSgsk3s9kaLTynb1qCb334IcjyibOamzd4gEaj77/aFtHTgH7VybYZQTgsPngXpIzIAkju5RtAzwTMnefOOTyslLkIMvKr96R+JDo3wx+yTgV0nAalvPPOqTkIXuWzUvDnOCRRFVSKG6kxAcovKZpANpkKpE1B0QNVQ2uKuHJz+rJ08/g4zDQiHOzSUOQoWUwaWQ+oF7+rbVy+kGQKvr61avxBDLDBEdeLIDTEQNMBE1wETUABNRA0xESQRu9TbWSMoy8aGa/FltvZL9h5Nu5tEVtzuItvoGMpmlbQbUdc/GGluBRClpnU42QVXpd7XPzZPqrIahkd/6OwsTZopf3EItM3YzT2ETjOxH54g10iTS8nB0QJI7i737rtFO3B8HZW8VbWFSBEBhW6y4S+lqmVZZgIGq3c6QZk4VudHVDaj7cmJsb75ZoMhHmMdLdqoHGlAHHkSvNCF98GT173hJekIrN8U4c104Oyqfgxx9Qv3xyQbtZrW4VmqtZAvHOWfEblVOX4Ec6heb/Ixp5X0f0cEyRssXtx85rPUQoLHVDbgAT3c6xMNmzv2BpY1vLVB9KwfAzMfJ5zOdF1PILKN9K+fm2VEuPpj1m70PQFYrKLacXDB3bugn1DQchlqnm8UM3ECgzgYU+xcEOI+XcCm4FcYuwSVxCqKFVJ0DShXqsAeEIJIOleMvVWmBSj4i4dwDynr0yQmnRL7suhXpPBmkMEgyPAYbbHJ7QFQK9a+q9uVTPG+uMwwny7K/cEMgdt8ft4MAAAAASUVORK5CYII="
					/>
				</svg>
			</a>
		</div>
		<div class="text-md flex text-mainWhite items-center gap-x-10">
			<ul class="flex list-roman marker:text-mainOrange gap-x-12">
				{#each navItems as item}
					<a href={item.link} class="p-2 hover:text-mainOrange"
						><li class="before:pr-2">{item.name}</li></a
					>
				{/each}
			</ul>
			<div class="flex items-center">
				<Button name="Resume" href="/" paddingX="2" paddingY="4" />
			</div>
		</div>
	</nav>
</header>

<style>
</style>
