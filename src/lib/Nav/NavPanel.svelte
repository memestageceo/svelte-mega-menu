<script lang="ts">
	import clsx from 'clsx';
	import { getContext, type Snippet } from 'svelte';
	import { getNavContext } from './NavState.svelte';
	import Triangle from './Triangle.svelte';

	type Props = {
		link: string;
		label: string;
		children: Snippet;
		index: number;
	};

	let { link, label, children, index }: Props = $props();
	/*
	const hovering = getContext<{ value: number | null }>('hovering');
	const popoverLeft = getContext<{ value: number }>('popoverLeft');
	const popoverHeight = getContext<{ value: number }>('popoverHeight');
	const refs = getContext<{ value: HTMLElement[] }>('refs');
	*/

	let hovering = getNavContext<{ value: number | null }>('hovering');
	let popoverLeft = getNavContext<{ value: number }>('popoverLeft');
	let popoverHeight = getNavContext<{ value: number }>('popoverHeight');
	let refs = getNavContext<{ value: HTMLElement[] }>('refs');

	function togglePanel(e: Event, index: number): void {
		hovering.value = index;
		const target = e.target as HTMLAnchorElement;
		popoverLeft.value = target.offsetLeft;
		const menuPanel = refs.value[index];
		if (menuPanel) {
			popoverHeight.value = menuPanel.offsetHeight;
		}
	}
</script>

<a
	href={link}
	onclick={(e: Event) => {
		e.preventDefault();
	}}
	onmouseenter={(e: Event) => togglePanel(e, index)}
	onfocus={(e: Event) => togglePanel(e, index)}
>
	{label}
</a>
{#if hovering !== null}
	<div
		style={`left:${popoverLeft.value}px; height: ${popoverHeight.value}px; --popover-left: ${popoverLeft.value}px`}
		class={clsx(
			'nav-group absolute top-[48px] z-20 border-2 shadow-lg  duration-200 ease-in-out',
			hovering.value === index ? 'opacity-100 transition-all' : 'pointer-events-none opacity-0'
		)}
	>
		<Triangle
			strokeWidth={0}
			size="20px"
			fill="blue"
			class="absolute left-4 top-0 -z-10 -translate-y-1/2"
		/>
		<div
			bind:this={refs.value[index]}
			class={clsx(
				'relative z-10 p-4 transition-all delay-100 duration-300',
				hovering.value === index || hovering.value === null
					? 'transform-none'
					: hovering.value! > index
						? 'translate-x-11'
						: '-translate-x-11',
				hovering.value === index ? 'opacity-100' : 'opacity-0'
			)}
		>
			{@render children()}
		</div>
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}
	/* 
	.nav-group::before {
		content: '▲';
		color: blue;
		position: absolute;
		top: 0;
		left: 4%;
		transform: translateY(-100%);
		z-index: -20;
		width: 20px;
		height: 20px;
		animation: fade-in 0.2s linear;
	}
	*/
</style>
