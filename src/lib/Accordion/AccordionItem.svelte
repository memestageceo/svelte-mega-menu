<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { StateProps } from './types';

	let {
		summary,
		description,
		index,
		open
	}: {
		summary: Snippet<[{ defaultStyles: string }]>;
		description: Snippet;
		index: number;
		open: boolean;
	} = $props();

	let defaultStyles = 'text-lg md:text-xl text-left text-slate-700 font-medium';

	let openState = getContext<number[]>('openState');

	function toggleOpen() {
		openState[0] = index;
	}
</script>

<div class="accordion-item">
	<button onclick={toggleOpen} tabindex={index}>
		{@render summary({ defaultStyles })}
	</button>
	{#if openState[0] === index}
		{@render description()}
	{/if}
</div>
