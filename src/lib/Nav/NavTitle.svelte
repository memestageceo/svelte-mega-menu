<script lang="ts">
	import { getContext } from 'svelte';

	type Props = {
		index: number;
		title: string;
	};

	let { title, index }: Props = $props();

	const hovering = getContext<{ value: number | null }>('hovering');
	const popoverLeft = getContext<{ value: number }>('popoverLeft');
	const popoverHeight = getContext<{ value: number }>('popoverHeight');
	const refs = getContext<{ value: HTMLElement[] }>('refs');

	function togglePanel(e: Event, index: number): void {
		hovering.value = index;
		const target = e.target as HTMLAnchorElement;
		popoverLeft.value = target.offsetLeft;
		popoverHeight.value = target.offsetHeight;
	}
</script>

<a
	href={title}
	onclick={(e: Event) => {
		e.preventDefault();
	}}
	onmouseenter={(e: Event) => togglePanel(e, index)}
>
	{title}
</a>
