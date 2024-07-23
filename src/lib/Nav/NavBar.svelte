<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		icon: Snippet;
		children: Snippet;
	};
	let { icon, children }: Props = $props();
</script>

<div class="flex h-[48px] w-full flex-row flex-nowrap items-baseline gap-4 shadow-md">
	<div class="icon text-3xl">
		{@render icon()}
	</div>
	{@render children()}
</div>
