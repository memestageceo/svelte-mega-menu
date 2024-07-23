<script lang="ts">
	import clsx from 'clsx';
	import { getContext, type Snippet } from 'svelte';

	type Props = {
		link: string;
		label: string;
		children: Snippet;
		index: number;
	};

	let { link, label, children, index }: Props = $props();

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
	href={link}
	onclick={(e: Event) => {
		e.preventDefault();
	}}
	onmouseenter={(e: Event) => togglePanel(e, index)}
	onfocus={(e: Event) => togglePanel(e, index)}
	bind:this={refs.value[index]}
>
	{label}
</a>

{#if hovering.value !== null}
	{@const arr = ['100', '200', '300', '400']}
	<div
		class={clsx(
			'nav-group absolute top-[48px] z-20 border-2 p-4 shadow-lg transition-all duration-200 ease-in-out',
			hovering.value === index ? 'opacity-100' : 'opacity-0',
			hovering.value === index || hovering.value === null
				? 'transform-none'
				: hovering.value > index
					? 'translate-x-7'
					: '-translate-x-7'
		)}
		style={`left: ${popoverLeft.value}px; height: ${popoverHeight}px`}
	>
		<ul class="grid list-none grid-cols-2 gap-4">
			{@render children()}
		</ul>
	</div>
{/if}
