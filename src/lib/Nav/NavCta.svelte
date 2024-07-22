<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<ul class="cta-links flex flex-row flex-nowrap gap-4">
	{@render children()}
</ul>
