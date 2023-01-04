<script>
	import { openModal } from '$lib/store';

	export let borderB = 'border-b-2';
	export let borderColor = 'border-mainOrange';
	export let paddingY = 'py-5';
	export let textColor = 'text-lighterGray';

	function scrollIntoView({ target }) {
		toggleModal();
		const elemento = document.querySelector(target.getAttribute('href'));
		if (!elemento) return;
		elemento.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function toggleModal() {
		openModal.update((n) => !n);
		openModal ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden');
	}
</script>

<div class="bg-mainGray mx-auto h-screen z-50 flex justify-center fixed top-0 right-0">
	<div class="max-h-screen bg-cream rounded-sm z-50 shadow-md">
		<div class="flex justify-between items-center gap-x-48 {borderB} {borderColor}">
			<svg
				class="w-8 h-8 m-2 sm:w-12 sm:h-12"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<image
					class="w-8 h-8 m-2 sm:w-12 sm:h-12"
					xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABpCAYAAABGUx/LAAAEkUlEQVR4nO2dy27UMBSG40wyM9wWlWDJa/RVWLW0YkM3CFjzDCCWLJBK2fBoLBA7oHOLkebGNMeeJPa5OeSXYGHnYn9zfHw7To29Os0Uy3qKZkCKAhUKy+QD6LpGFVQtMNsAdOnwPnGw0jBDIbokDlYCJiZAn0TAcsHkAOgTm3+lhikJsS5ya6WCqQmiSyRgsWFqh+gSmhvAgJkiQJeioYbC5Aa4q6DqkUAXmJwAfZXghFp/j69MezXBlLLAttdxlq/RDfhgaoXYdJ+oGyg8F1GLagBtJK216AlE1zu4oRpfM8eWxMIDtwuwlDC1LeCSWywFTJWr4Acig4oJUzvEutDdQAxMSnhtKob9/miLDYFJBbFrJajWKYOhtoUpbYXHRA11p8ZySu4BYXcA4juWnDBVLk5gigOmhv2fLPU9IG2LxuRuABNmKivuZNaag5QQFeMfmIVilMU0AhyYy/ljkPYfCgVmNX3wGiQiyBbjF9umaFKYrqL4TGPyEiRGPnL933LuTNfqn1Es08x+fQeJnR+Sn3ewQJXWiuMzq+orSGuvDRQb/Iz1/bacXIIcZuHA7ChbTi+xLcssZtfSFss9N9/4wsUtyCB6F6tvFbHMvkpjTLuEUGZFg2VCBc+K+g4zpiPqDHVo5s1qDZTbMvsSy+mURDPvLVCpZq7qMBSWNHRAa0e/Gt97A3ISk5refDT/8x57sXYrtimm1qGR3f8bFecgN1yGEq7+ceZq+WUPthifgfw4oUJNa9C+nN/swT46eQfyw7VZxhuVF1EPsVen2EFSqcTDN6lzPSgsk3s9kaLTynb1qCb334IcjyibOamzd4gEaj77/aFtHTgH7VybYZQTgsPngXpIzIAkju5RtAzwTMnefOOTyslLkIMvKr96R+JDo3wx+yTgV0nAalvPPOqTkIXuWzUvDnOCRRFVSKG6kxAcovKZpANpkKpE1B0QNVQ2uKuHJz+rJ08/g4zDQiHOzSUOQoWUwaWQ+oF7+rbVy+kGQKvr61avxBDLDBEdeLIDTEQNMBE1wETUABNRA0xESQRu9TbWSMoy8aGa/FltvZL9h5Nu5tEVtzuItvoGMpmlbQbUdc/GGluBRClpnU42QVXpd7XPzZPqrIahkd/6OwsTZopf3EItM3YzT2ETjOxH54g10iTS8nB0QJI7i737rtFO3B8HZW8VbWFSBEBhW6y4S+lqmVZZgIGq3c6QZk4VudHVDaj7cmJsb75ZoMhHmMdLdqoHGlAHHkSvNCF98GT173hJekIrN8U4c104Oyqfgxx9Qv3xyQbtZrW4VmqtZAvHOWfEblVOX4Ec6heb/Ixp5X0f0cEyRssXtx85rPUQoLHVDbgAT3c6xMNmzv2BpY1vLVB9KwfAzMfJ5zOdF1PILKN9K+fm2VEuPpj1m70PQFYrKLacXDB3bugn1DQchlqnm8UM3ECgzgYU+xcEOI+XcCm4FcYuwSVxCqKFVJ0DShXqsAeEIJIOleMvVWmBSj4i4dwDynr0yQmnRL7suhXpPBmkMEgyPAYbbHJ7QFQK9a+q9uVTPG+uMwwny7K/cEMgdt8ft4MAAAAASUVORK5CYII="
				/>
			</svg>
			<button on:click={toggleModal}>
				<svg
					class="w-8 h-8 m-2 sm:w-12 sm:h-12"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					><path
						d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
					/></svg
				>
			</button>
		</div>
		<ul class="text-center">
			<a href="#about" on:click={scrollIntoView}
				><li class="{borderB} {borderColor} {paddingY} {textColor}">About</li></a
			>
			<a href="#skills" on:click={scrollIntoView}
				><li class="{borderB} {borderColor} {paddingY} {textColor}">Skills</li></a
			>
			<a href="#projects" on:click={scrollIntoView}
				><li class="{borderB} {borderColor} {paddingY} {textColor}">Projects</li></a
			>
			<a href="#contact" on:click={scrollIntoView}
				><li class="{borderB} {borderColor} {paddingY} {textColor}">Contact</li></a
			>
			<a href="/"><li class="{borderB} {borderColor} {paddingY} {textColor}">Resume</li></a>
		</ul>
	</div>
</div>
