<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { StateProps } from './types';

	let { children }: { children: Snippet } = $props();

	function toggleState() {
		let openIndex = $state<number[]>([]);
		return openIndex;
	}

	const openState = toggleState();

	setContext('openState', openState);
</script>

<div class="accordion flex flex-col gap-5 px-5 text-left">
	{@render children()}
</div>
