<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();

	let activePanel = $state<number | null>(null);

	function setActivePanel(index: number) {
		activePanel = index;
	}
	let isPanelOpen = $state(false);
	function togglePanel(index: number) {
		isPanelOpen = true;
		activePanel = index;
	}

	function closePanels() {
		isPanelOpen = false;
	}
</script>

<nav class="flex flex-grow flex-row flex-nowrap items-center gap-5" onmouseleave={closePanels}>
	{#each new Array(4) as _, index}
		<div class="nav-panel relative">
			<a
				href="link-{index}"
				onclick={(e: Event) => {
					e.preventDefault();
				}}
				onmouseenter={() => togglePanel(index)}
			>
				link-{index}
			</a>
			{#if isPanelOpen}
				<div
					class={`nav-group absolute top-[48px] grid w-52 list-none grid-cols-2 gap-4 bg-white p-4 ${activePanel === index ? 'block' : 'hidden'}`}
				>
					<li>item-01</li>
					<li>item-02</li>
					<li>item-03</li>
					<li>item-04</li>
					<li>item-05</li>
					<li>item-06</li>
					<li>item-07</li>
					<li>item-08</li>
				</div>{/if}
		</div>{/each}
</nav>
